# Kickscale website

Static bilingual website: English and German, official Kickscale logo, Trust Center, and customer stories. No dependency installation or production build is required.

## Pages and navigation

- `/en/` and `/de/`: localized homepages.
- `/en/trust-center` and `/de/datenschutz`: equivalent localized Trust Center pages.
- `/en/customers` and `/de/erfolgsgeschichten`: customer story collections.
- `/en/stories/<slug>` and `/de/erfolgsgeschichten/<slug>`: individual stories.

Header and footer menus contain only Home / Startseite and Trust Center. The DE/EN switch opens the equivalent page, including individual customer stories. The original English and German article text comes from Kickscale's existing public site. Trust Center descriptions are translated; the original policy file names and source links remain intact.

## Hosting and deployment

Repository: `geraldzankl/kickscale-website`. Branch: `main`. Publish the repository root, with no build command. Intended live domain: `www.kickscale.si`.

Hostinger Apache/LiteSpeed uses the included `.htaccess` to serve clean paths without `.html` or a required trailing slash, redirect legacy HTML URLs, and send indexing headers. Directory-based `index.html` pages also support static hosts that do not process `.htaccess`; those hosts may append a trailing slash. Legacy HTML files include browser redirects to clean routes as a fallback.

For manual deployment, upload the locale folders, `assets/`, all CSS/JS files, `favicon.svg`, `robots.txt`, `.htaccess`, and the root/legacy HTML files, preserving paths. Include hidden files: `.htaccess` is essential for Apache/LiteSpeed routing and headers. Enable SSL in hPanel. A Git push updates the live site only when Hostinger automatic deployment is configured; otherwise redeploy the `main` branch in Hostinger.

## Search indexing

Every HTML page includes `noindex, nofollow, noarchive`. `.htaccess` additionally sets `X-Robots-Tag: noindex, nofollow, noarchive` on all Apache/LiteSpeed responses. `robots.txt` allows crawling so search engines can discover and respect the noindex directive; blocking crawling would prevent them from reading it. No sitemap is published.

These directives request exclusion from compliant search engines; the website remains publicly accessible. They are not access control. Pages previously indexed may take time to disappear; use the relevant search engine removal tools for urgent removals. Verify the noindex metadata and headers on the live Hostinger site after deployment, since static/CDN hosts may ignore `.htaccess`.

## Brand assets and fonts

The header, footer, dashboard, and favicon use the original Kickscale vector artwork retrieved from its public website. The original white wordmark is stored in `assets/logos/kickscale-white.svg`; the favicon uses its original symbol path and gradient.

Brand colors: navy `#030929`, turquoise `#2BCCC5`, yellow `#ECE338`, red `#FF3463`. Confirmed fonts: Poppins ExtraBold (800), Instrument Serif Regular (400) for turquoise accents, Inter Regular (400) for subtitles and body copy. Fonts are self-hosted with their licenses in `assets/fonts/`. No analytics, cookies, external asset requests, or third-party embeds are used.

## Trust Center content

The 17-document library provides localized search and filtering, FAQs, Google Cloud hosting information for Frankfurt, and `datenschutz@kickscale.com`. Document entries open the supplied Notion Privacy Center because individual file URLs were not provided. See `trust-center-content-source.md` for provenance. An English overview does not imply that the original policy documents are available in English.

## Local development

Run `python3 -m http.server 8080` from the repository root. Directory-based routes work with trailing slashes; Apache/LiteSpeed is needed to exercise `.htaccess` redirects and response headers. Edit the static locale files directly; keep equivalent language pages and switches synchronized.
