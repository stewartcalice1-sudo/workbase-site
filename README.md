# WORKBASE Corporate Website

Official static corporate website for WORKBASE. It introduces the parent organization, its corporate approach, the SITESERV platform, and corporate contact pathways.

## Pages

- `index.html` — WORKBASE homepage
- `company.html` — company story and corporate foundation
- `platforms.html` — portfolio page, currently introducing SITESERV
- `philosophy.html` — corporate philosophy and operating principles
- `contact.html` — corporate and business inquiry form

## Brand and assets

The site uses the WORKBASE logo, Inter typography, a restrained navy/gray/white palette, and distinct architectural photographs. Keep the `assets/` directory beside the HTML files.

## SITESERV destination

All direct SITESERV website links are synchronized through `WORKBASE_CONFIG.siteservUrl` at the top of `script.js`. The configured destination is:

<https://stewartcalice1-sudo.github.io/siteserv-website/>

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. On macOS, `START_LOCAL.command` opens a local preview on port 4173.

## Publish with GitHub Pages

1. Create a **public** GitHub repository for the WORKBASE corporate website.
2. Upload the **contents** of this directory to the repository root. `index.html` must be at the root, beside `company.html`, `platforms.html`, `styles.css`, `script.js`, and `assets/`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **`main`** and folder **`/(root)`**, then save.
6. Wait for the Pages deployment to complete. The public site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Contact form deployment note

The current contact form contains Netlify Forms markup. **GitHub Pages does not process Netlify Forms submissions.** Before relying on the form on GitHub Pages, connect an external form handler and test an actual submission, or deploy the site through Netlify and configure form notifications. Until that step is completed, do not assume form submissions are being delivered.

## Public repository and rights

This repository is public for website hosting and source visibility. No open-source license is included; public visibility does not grant permission to reuse WORKBASE branding, logos, copy, or other proprietary materials.
