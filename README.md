# kickscale.si — permanent redirect

This repository is deployed to `kickscale.si` on Hostinger.

- **New destination:** https://kickscale.com/
- **Redirect:** HTTP 301 (permanent) for all paths on `kickscale.si` and `www.kickscale.si`.
- **Hosting:** Apache/LiteSpeed `.htaccess` handles the server-side redirect.
- **Fallback:** `index.html` redirects browsers without rewrite support.
- **Source content:** the previous 83-file bilingual customer resources website was copied to the independent repository [geraldzankl/resources.kickscale.si](https://github.com/geraldzankl/resources.kickscale.si).

The redirect intentionally sends all old paths to the kickscale.com homepage; it does not try to map old resource URLs to new pages.

## Hostinger

Deploy this repository's `main` branch to the document root of **kickscale.si only** (`public_html` for that website). Do not deploy this repository to the `resources.kickscale.si` subdomain. Enable or retain HTTPS for both the apex and www hostnames. If Git auto-deployment isn't enabled in Hostinger, click **Deploy** / **Redeploy** after each commit.
