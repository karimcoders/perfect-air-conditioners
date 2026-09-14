#!/usr/bin/env bash
# Downloads + optimizes all free (Pexels, free-to-use) photos into
# src/assets/images so the build never depends on external image URLs.
# Run from project root: bash scripts/fetch-images.sh
# Requires: curl and sharp (`npm i sharp --no-save` first).
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p src/assets/images
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

dl() { # dl <pexels-id> <output-name> <width> <height>
  id="$1"; name="$2"; w="$3"; h="$4"
  url="https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=$w&h=$h"
  echo "downloading $name ($id)..."
  curl -sSL --retry 3 "$url" -o "$TMP/$name.src.jpg"
}

# sources (Pexels photo IDs, free license)
dl 37301698 hero        1200 830
dl 7347538  hero-thumb   400 400
dl 9432572  copper       480 480
dl 28268141 aluminium    480 480
dl 23482502 iron         480 480
dl 37441612 brass        480 480
dl 12093056 motors       480 480
dl 29452977 compressors  480 480
dl 35898707 steel        480 480
dl 9742093  other        480 480
dl 36397935 why         1200 800

node - "$TMP" <<'NODE'
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const tmp = process.argv[2];
const out = "src/assets/images";
const jobs = [
  ["hero.src.jpg",        "hero-ac-scrap.jpg",    { width: 920 }, 72],
  ["hero-thumb.src.jpg",  "hero-ac-tech.jpg",     { width: 200, height: 200, fit: "cover" }, 74],
  ["copper.src.jpg",      "copper.jpg",           { width: 320, height: 320, fit: "cover" }, 70],
  ["aluminium.src.jpg",   "aluminium.jpg",        { width: 320, height: 320, fit: "cover" }, 70],
  ["iron.src.jpg",        "iron.jpg",             { width: 320, height: 320, fit: "cover" }, 70],
  ["brass.src.jpg",       "brass.jpg",            { width: 320, height: 320, fit: "cover" }, 70],
  ["motors.src.jpg",      "motors.jpg",           { width: 320, height: 320, fit: "cover" }, 70],
  ["compressors.src.jpg", "compressors.jpg",      { width: 320, height: 320, fit: "cover" }, 70],
  ["steel.src.jpg",       "steel.jpg",            { width: 320, height: 320, fit: "cover" }, 70],
  ["other.src.jpg",       "other-metal-scrap.jpg",{ width: 320, height: 320, fit: "cover" }, 70],
  ["why.src.jpg",         "recycling-yard.jpg",   { width: 960 }, 72],
];
(async () => {
  let total = 0;
  for (const [src, dest, opt, q] of jobs) {
    const buf = await sharp(path.join(tmp, src)).resize(opt).jpeg({ quality: q, mozjpeg: true }).toBuffer();
    fs.writeFileSync(path.join(out, dest), buf);
    total += buf.length;
    console.log(dest, Math.round(buf.length / 1024) + "KB");
  }
  await sharp("src/assets/logo.jpg").resize(128, 128, { fit: "cover" })
    .png({ compressionLevel: 9 }).toFile("src/assets/favicon.png");
  console.log("favicon.png written; total photos:", Math.round(total / 1024) + "KB");
})();
NODE

echo "ALL_IMAGES_READY"
