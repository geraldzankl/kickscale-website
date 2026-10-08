# Kickscale website

Responsive static marketing website with a homepage, customer stories, and German Trust Center. No installation or build step is needed.

## Local development

Run `python3 -m http.server 8080` from the repository root. All public pages and assets are static files.

## Hostinger

Use repository `geraldzankl/kickscale-website`, branch `main`, and the repository root as the publish directory. No build command is required. The entry point is `index.html`.

For Hostinger Web Hosting without Git deployment, upload the HTML, CSS, JavaScript, favicon, `assets/`, and `stories/` into the domain's `public_html` directory, preserving relative paths. Replace the default hosting index file if present. Configure the domain and SSL in hPanel. A Git push updates the repository; it updates the live site only when automatic deployment is configured.

## Brand design

The design uses navy `#030929`, turquoise `#2BCCC5`, yellow `#ECE338`, and red `#FF3463`. Shared `brand.css` applies the dark background, translucent cards, and mixed sans-serif/serif headings to every page. The confirmed brand typography uses Poppins ExtraBold (800) for white headlines, Instrument Serif Regular (400) for turquoise headline accents, and Inter Regular (400) for subtitles and body copy. All three fonts are self-hosted in `assets/fonts/`, with their licenses included.

There are no analytics, cookies, third-party embeds, or externally hosted font/image requests. The product dashboard is labeled as an illustrative sample.

## Customer stories

`customers.html` provides search and industry filtering for 13 stories. The full article text is available locally under `stories/`. Content was retrieved from `https://www.kickscale.com/customers` and its linked English customer stories. `customer-stories-source.json` records the source URLs and original summaries. Customer results retain their individual context; they are not presented as performance guarantees. Source images and video embeds are omitted; company names are displayed as text. The articles and collection remain readable without JavaScript.

## Trust Center

`trust-center.html` contains a German overview of privacy, information security, hosting, AI models, and contracts. The 17-document library supports category filtering and search; it remains readable without JavaScript. FAQs use native expandable details. Document entries open the supplied Notion Privacy Center because individual file URLs were not provided. The contact address is `datenschutz@kickscale.com`.

Content provenance and the source inventory are recorded in `trust-center-content-source.md`. Hosting and certification information reflects the content supplied by the repository owner; certificate validity and the individual documents have not been independently checked.
