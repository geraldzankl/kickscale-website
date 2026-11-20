# Kickscale enterprise website for kickscale.si

Built from the approved v2/v3 mockups. German at `/`, English at `/en/`. Responsive product mega-menu, five platform areas, customer stories, detailed Lime Connect case, integrations, resources, company and custom-pricing wizard. Native PHP server rendering for search-engine-readable content and a single shared content source for both languages.

## Deployment
- Deploy this repository to the **kickscale.si** document root on Hostinger; requires PHP 8.1+ and Apache/LiteSpeed mod_rewrite.
- The old version of this repository was a `301` redirect to kickscale.com. This release intentionally removes it.
- Do **not** point or deploy to `resources.kickscale.si`; that site is maintained separately.
- `.htaccess` should be present on the host. Configure HTTPS and purge any cached old permanent redirects, including browser/CDN 301 caches.
- The source is editable in `index.php` (content & routes), `site.css` (design), `site.js` (interactions).
- Smoke test: `/`, `/en/`, `/preise`, `/en/pricing`, `/produkt`, `/en/product`, `/erfolgsgeschichten`, `/en/customer-stories`, all five product subpages, navigation on mobile and desktop, 404 behavior, sitemap.

## Before launching conversions
- The **Book a demo** CTA sends visitors to the real Kickscale demo flow at `kickscale.com/demo` and `/en/demo`.
- The **Explore platform** form only unlocks a link to the existing Kickscale product tour; it intentionally **does not store or send email**. Connect an approved HubSpot form/workflow before activating real lead capture. Do not claim leads are captured until verified.
- The original product-tour video cannot be reproduced without its verified embed URL. Replace the modal's `data-video-url` or insert the exact official video embed once available.
- Original Kickscale logo is referenced from Kickscale's official Webflow CDN SVG (no reconstructed wordmark). For reliability, mirror the approved SVG locally when asset download is available.
- The site does not distribute fonts; CSS prefers the licensed Gellix/Reckless Neue if provisioned, otherwise Inter/Arial/Georgia fallbacks.
- The Lime Connect image is sourced from the public Kickscale case study URL; external CDN access must be tested on production.

## Claims, privacy and third-party connections
- Metrics: `200+ revenue teams` from current public Kickscale site; `195 working days`, `15 sales consultants` and `2 hours/week` from the published Lime Connect story. The additional suggested `+23% win rate` and `1,000+ insights` are NOT shown pending evidence.
- Trust elements follow Kickscale's published language: ISO 27001 certified, GDPR / EU-hosted and EU AI Act **Ready**. Do not convert "Ready" to blanket legal compliance claims. The canonical compliance documentation remains at `kickscale.com/legal` and `/en/legal` to avoid duplicate/conflicting copies.
- AI integrations such as MCP, Claude and n8n are presented with an explicit qualification, not as certified native integrations.
- Site has no analytics scripts, trackers, embedded third-party video players or functioning PII collection. Add appropriate cookie consent/analytics only after privacy review.
- Product visualization is an illustrated mockup, not an actual product screenshot. Case quote comes from the public customer story. Avoid fake portraits or attributed outcomes.
- Case cards besides Lime Connect currently link to Kickscale's public customer-story overview until exact individual URLs and media releases are confirmed.

## Code
No build step needed. All HTML is server-rendered by `index.php`. Keep the GitHub repository private if confidential material is later added; this release contains only customer-facing material.