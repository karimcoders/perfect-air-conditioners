# Deploy — Perfect Air Conditioners Landing Page

The build outputs a **single self-contained `dist/index.html`** (all CSS, JS and the
logo are inlined). Only the photos load from the free Pexels CDN and the Poppins
font from Google Fonts.

---

## Option 1 — Instant temporary link (30 seconds, no signup needed)

1. Run `npm install` then `npm run build` on your machine.
2. Open **https://app.netlify.com/drop**
3. Drag the generated **`dist`** folder onto the page.
4. You instantly get a free URL like `https://random-name-123.netlify.app`.
5. (Optional) Create a free Netlify account to keep the site and rename the subdomain.

> Alternatives with the same drag-and-drop flow: https://vercel.com (import the
> folder/repo) or Cloudflare Pages.

---

## Option 2 — GitHub Pages (free permanent URL: `username.github.io/repo-name`)

This repo already includes `.github/workflows/deploy.yml`.

1. Create a new GitHub repository and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Perfect Air Conditioners landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The workflow builds and deploys automatically on every push. Your live link
   appears in the Actions tab / Pages settings.

---

## Option 3 — Vercel / Netlify connected to GitHub (recommended for clients)

1. Push the repo to GitHub (steps above).
2. Go to https://vercel.com/new or https://app.netlify.com → **Import from Git**.
3. Framework preset: **Vite** (build command `npm run build`, output directory `dist`).
4. Deploy — you get a free `*.vercel.app` / `*.netlify.app` URL with free HTTPS
   and auto-redeploys on every change.

---

### Notes
- Every phone button uses `tel:08498846505` — works on mobile without setup.
- To swap the logo later with the client's original PNG/JPG, simply replace
  `src/assets/logo.jpg` with the same filename (or update the import in
  `src/components/Logo.tsx`).
