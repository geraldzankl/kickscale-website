# Kickscale Enterprise Website — v6: earlier copy + visual updates

Branch: `main` in `geraldzankl/kickscale-website`.

## Scope of this update (20 Nov 2026)

Restores the copy of the previous website version (before the 'Before / After' framework rewrite). Preserves the approved visual refinements: original value-driven hero headline, dark/navy five-layer revenue graphic and integration links; transparent, high-contrast buttons; five Product entries stacked vertically; Success Stories as a direct nav link without submenu; larger Trust Center/ISO/GDPR/EU-hosting/EU AI Act references; more visible metrics; and localized DE/EN footer. The Success Stories page is titled `Metrics / Proof Points` by request. The standalone Raving Fans page and Resources menu remain.

## Proof and media handling

- Published customer stories link to the canonical Kickscale site. Quantified cases include Lime Connect (195 working days/year), Cropster (40% improvement in sales meeting quality scores), Octonomy (80% fewer admin tasks), Placetel, Finmatics, and finway.
- The verified Gina Marie Lazzaro photo is loaded from the existing Kickscale case-story CDN. Martin Dalberg-Andersen and Frank Piotraschke portraits were not included without a verified, re-usable asset link; their initials remain as explicit fallbacks. **Do not replace them with AI-generated people presented as the customers.**
- The six company logos use publicly visible company image URLs with text fallback when remote images fail. Direct external logos should eventually be replaced with approved, locally hosted assets.
- The four hero/home impact figures (`10+ h`, `20%`, `>99%`, `1000+`) are brief-level marketing figures. They carry explicit labels and a disclaimer; do not treat them as customer-specific verified outcomes before claims sign-off.
- The five-layer hero image is in `assets/revenue-stack-cropped.webp`. The negative logo is the **existing original** `assets/kickscale-logo-negative.svg` in this repository; do not overwrite it with the placeholder in an older local ZIP.
- For EU AI Act disclosures, link to the official Trust Center; verify the exact certification/compliance claim prior to using legal assurances in external marketing.

## Stack and publishing

Simple bilingual PHP website: `index.php` (routes, copy, components), `site.css`, `site.js`, `/assets`, `data/raving-fans.json`, `.htaccess` for Apache/Hostinger, `robots.txt`, `sitemap.xml`. Requires PHP 8.1+.

This GitHub push updates source. A git commit alone does not prove that Hostinger deployed. The Hostinger site must connect to the correct repository and deploy `main` to its document root, then the live URL must be checked. Hostinger automatic deployment is unverified from this environment.

## Local QA

`php -l index.php`, `node --check site.js`. PHP built-in server smoke tests passed for `/`, `/en/`, `/erfolgsgeschichten`, `/en/customer-stories`, `/produkt`, `/en/product`, and both Raving Fans pages. The Success Stories nav is a direct link, no before/after framework is present and locale-sensitive footer content is correct.