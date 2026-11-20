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
- The official original Kickscale negative SVG (`assets/kickscale-logo-negative.svg`) is restored from the previously committed Kickscale media asset. This is used in both the header and footer on navy backgrounds. The old PNG crop can remain in the repository for historical reference but is no longer used.
- The site does not distribute fonts; CSS prefers the licensed Gellix/Reckless Neue if provisioned, otherwise Inter/Arial/Georgia fallbacks.
- The Lime Connect image is sourced from the public Kickscale case study URL; external CDN access must be tested on production.

## Claims, privacy and third-party connections
- Metrics: `200+ revenue teams` from current public Kickscale site; `195 working days`, `15 sales consultants` and `2 hours/week` from the published Lime Connect story. The additional suggested `+23% win rate` and `1,000+ insights` are NOT shown pending evidence.
- Trust elements follow Kickscale's published language: ISO 27001 certified, GDPR / EU-hosted and EU AI Act **Ready**. Do not convert "Ready" to blanket legal compliance claims. The canonical compliance documentation remains at `kickscale.com/legal` and `/en/legal` to avoid duplicate/conflicting copies.
- AI integrations such as MCP, Claude and n8n are presented with an explicit qualification, not as certified native integrations.
- Site has no analytics scripts, trackers, embedded third-party video players or functioning PII collection. Add appropriate cookie consent/analytics only after privacy review.
- Product visualization is an illustrated mockup, not an actual product screenshot. Case quote comes from the public customer story. Avoid fake portraits or attributed outcomes.
- Case cards use verified published Kickscale KPIs and deep links: Lime Connect (195 days/year), Cropster (+40% meeting-quality scores), Octonomy (-80% administration), Placetel (1-2 hours per rep/day), Finmatics (10% seller time savings), finway (60-80% follow-up admin reduction). Named speakers are attributed from published stories. Only Gina Marie Lazzaro has an exact, previously published Kickscale portrait URL. Other cards use clearly decorative initials; do not replace them with stock or AI-generated fake portraits.

## Code
No build step needed. All HTML is server-rendered by `index.php`. Keep the GitHub repository private if confidential material is later added; this release contains only customer-facing material.

## Raving Fans videos (no developer required)
- DE: `/erfolgsgeschichten/raving-fans` · EN: `/en/customer-stories/raving-fans`
- **Edit only `data/raving-fans.json`.** Four customer examples are preconfigured, but their `url` fields are intentionally empty because approved video URLs have not been verified.
- Paste an approved YouTube or Vimeo URL into the matching `url` field and commit the JSON. The video card will then appear automatically.
- Supported URLs: `https://www.youtube.com/watch?v=VIDEOID`, `https://youtu.be/VIDEOID`, `https://vimeo.com/VIDEOID`. Video playback loads a privacy-friendly player **only after the visitor clicks Play**.
- Replace `title_de`, `title_en`, `name`, `company`, `role` and optionally `poster` per video. The poster should be a legitimately approved image URL (not a stock person masquerading as the customer).
- Until real videos are added, visitors see a respectful placeholder and short summaries of published customer statements. Never show a fake play button implying a video exists.

## Resources and proof updates
- Resources mega-menu and resources page link to the existing official Kickscale Blog, YouTube, Webinars, Events, Guides, ROI calculator, FAQ, Help Center, Research Hub article and locally maintained Release Notes. The articles displayed are real published content.
- The customer stories section, pricing testimonials and homepage now render numeric case-study cards using the same single source array in `index.php`.
- `resources.kickscale.si` is untouched.

## Enterprise design v5 (2026-11-20)
- Homepage hero uses the layered design concept from the owner-supplied reference, with responsive interactive five-capability tiles and explicit links to major integration families.
- Success Stories navigation is a direct link (no submenu). Product mega-menu stacks its five pillars vertically. Secondary CTAs are transparent with high contrast.
- The four prominent design-brief outcome figures are labelled as representative/indicative where no customer-backed source exists. Do not turn illustrative values into guaranteed or customer-reported results. Published customer cases remain the source for customer-specific proof.
- Customer logo strip uses URLs identified from actual public brand images and has text fallbacks if third-party hosts reject hotlinks. Replace with licensed local originals when available.
- Gina's portrait is sourced from a published Kickscale case. Martin, Frank and other people keep initials pending a directly accessible, approved photo; AI-generated faces from visual mockups are NOT genuine portraits and must not be used as real testimonials.
- EU AI Act Ready is a readiness statement, not legal certification. ISO/GDPR claims link to the official canonical Trust Center.
- Hostinger live publication cannot be inferred from a GitHub push; verify PHP hosting and DNS separately.