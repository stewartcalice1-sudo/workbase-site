WORKBASE CORPORATE WEBSITE

A responsive, multi-page corporate website for WORKBASE as the parent organization behind a portfolio of focused businesses.

PAGES
- index.html       Corporate homepage and introduction to WORKBASE
- company.html     Company story, parent-company role and shared foundation
- platforms.html   Public platform overview; currently introduces SITESERV only
- philosophy.html Corporate principles and approach to business development
- contact.html     Corporate and business inquiry form

BRAND AND CONTENT
The website retains the WORKBASE logo, Inter typography, restrained navy/gray/white palette, and editorial architectural style.
The corporate pages describe WORKBASE independently from its ventures. The Platforms page currently introduces SITESERV only.
The SITESERV content describes its current development direction; it does not claim that planned capabilities are already live. Every photographic section uses a different image. The homepage hero retains the original glass-building photograph with only the WORKBASE emblem added.

SITESERV WEBSITE LINK
The Platforms page and portfolio footers link directly to the published SITESERV website: https://stewartcalice1-sudo.github.io/siteserv-website/. The destination is configured once in WORKBASE_CONFIG.siteservUrl near the top of script.js and is synchronized across the site.

CONTACT FORM
The contact form is configured for Netlify Forms (data-netlify="true"). When you deploy to Netlify, enable form submissions in the site dashboard and configure notification delivery to the intended WORKBASE inbox. The form is not connected to an email inbox until that deployment-side configuration is completed. No email address has been invented or published.

LOCAL PREVIEW
Open index.html in a browser, or run:
  python3 -m http.server 8000
Then visit http://localhost:8000

On macOS, START_LOCAL.command opens a local preview at http://localhost:4173.

DEPLOYMENT
Upload the contents of this folder to the root of a static hosting site. For working form submissions without custom backend code, deploy through Netlify and configure form notifications in the Netlify dashboard. Keep the assets folder alongside the HTML files.
