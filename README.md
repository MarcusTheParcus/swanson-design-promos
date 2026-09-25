# Swanson Design — 15 Project GitHub Pages Package

This package contains a client-facing landing-page prototype and a custom PDF viewer for the 15 Swanson Design promotional portfolios.

## Files
- `index.html` — branded materials landing page
- `viewer.html` — project viewer with BACK TO MATERIALS and FULL SCREEN controls
- `projects.json` — project titles, categories, thumbnail paths and individual Dropbox links
- `app.js` / `styles.css` — landing page behavior and styling
- `images/` — interior-page thumbnails extracted from the supplied PDFs; covers are not used
- `logo.png` — Swanson Design logo asset
- `ADOBE_EXPRESS_SETUP.md` — instructions for recreating the landing page in Adobe Express

## GitHub Pages
1. Create a GitHub repository (for example `swanson-design-promos`).
2. Upload all files/folders in this package to the repository root.
3. In GitHub: Settings → Pages → Deploy from branch → `main` / root.
4. The published `index.html` is the landing page.
5. Each VIEW PROJECT button opens `viewer.html?id=...`.

## Dropbox
The project links are the individual Dropbox links supplied for this package. The Automotive Retail Design link was independently tested by the user in an incognito browser session. Other links are included exactly as supplied; this package does not independently authenticate or verify Dropbox permissions.

## Adobe Express
Use the landing-page design in `index.html` as the visual specification for the Adobe Express front door. Adobe Express buttons can point to the GitHub Pages viewer URLs rather than directly to Dropbox. This preserves the branded flow:

Adobe Express landing page → Swanson project viewer → Dropbox PDF → FULL SCREEN
