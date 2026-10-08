# Kickscale website

Responsive static marketing website. No installation or build step is needed. Brand palette: navy `#030929`, turquoise `#2BCCC5`, yellow `#ECE338`, red `#FF3463`.

## Local development

Run `python3 -m http.server 8080` from the repository root. Edit `index.html`, `styles.css`, and `script.js` directly.

## Hostinger

Use repository `geraldzankl/kickscale-website`, branch `main`, and the repository root as the publish directory. No build command is required. The entry point is `index.html`.

For Hostinger Web Hosting without Git deployment, upload `index.html`, `styles.css`, `script.js`, and `favicon.svg` to the domain's `public_html` directory. Replace the default hosting index file if present. Configure the domain and SSL in hPanel. A Git push updates the repository; it updates the live site only when automatic deployment is configured.

## Content notes

The dashboard is explicitly labeled as an illustrative sample. There are no customer testimonials, unverified performance statistics, tracking scripts, cookies, or external assets. Navigation uses working section links; a contact form or booking destination is not configured. Business-approved legal and privacy information can be added when supplied.

Current copy and the system font are provisional pending access to www.kickscale.com to confirm the existing wording, logo, and font. The supplied brand colors are implemented.

## Trust Center

The header and footer link to `trust-center.html`: a German overview of privacy, information security, hosting, AI models, and contracts. The 17-document library supports category filtering and search; it remains readable without JavaScript. FAQs use native expandable details. All document entries open the supplied Notion Privacy Center because individual file URLs were not provided. The contact address is `datenschutz@kickscale.com`.

Content provenance and the source inventory are recorded in `trust-center-content-source.md`. Hosting and certification information reflects the content supplied by the repository owner; certificate validity and the individual documents have not been independently checked.

Deploy `trust-center.html`, `trust-center.css`, and `trust-center.js` alongside the existing public files. The site remains static, with no installation or build step.
