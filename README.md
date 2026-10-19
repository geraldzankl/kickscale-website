# Kickscale resource hub and unlisted sales room

Public homepage at https://kickscale.si/ with German/English switching. It links to the official website, free trial, general Sales Room (DE/EN), customer case studies, integrations, Help Center, Trust Center (DE/EN), YouTube and sales contact. The public homepage is unchanged by this update.

## Publish

Target: Hostinger Apache/LiteSpeed. Repository: geraldzankl/kickscale-website. Branch: main. Publish the repository root; no build step. Include the root .htaccess and the sales room directory, including its .htaccess and index.html. The XING room is now a static page deployed with the rest of the repository: it does NOT require PHP, a private server directory, rooms.json, or a separate manual content upload.

The existing assets directory is preserved, including official logos and Poppins, Instrument Serif and Inter. Pages have no analytics or third-party embedded players. PHP 8.1+ is only needed for the optional legacy host-only handler described below.

A Git push is not proof of live publication. It triggers publication only if Hostinger automatic Git deployment is configured. Otherwise deploy main through the site's Git deployment in hPanel. Purge old host/CDN caches and verify live responses. X-Kickscale-Site identifies this revision as resource-hub-20261019-r2. The XING HTML has build-id xing-sales-room-20261019-r2.

## Public repository authorization

On 19 October 2026, the owner explicitly authorized uploading the prepared XING customer-facing page to this public GitHub repository, even though it would be visible here. Only that finished German page is included. Raw meeting transcripts, recording links, PINs, the source PDF, deal financials, internal research notes and the private hosting package are NOT included.

The XING directory name and its page contents can be discovered in this public repository and its commit history. The random URL is therefore an unlisted link, NOT an access-control mechanism. No promise of confidentiality, employee-only access, or invisibility on the internet is made. Noindex on kickscale.si cannot control indexing of GitHub's own pages. Removing content from a future commit does not erase existing history or copies.

## Indexing and routes

Only / (including its language query string) is indexable and appears in sitemap.xml. It uses index,follow in HTML and the HTTP header. German is default; English is ?lang=en with a root canonical. The homepage, navigation, sitemap and robots.txt do not link to the XING room.

The XING route returns its German static HTML with noindex,nofollow,noarchive,nosnippet in HTML and HTTP headers, no-store and no-referrer. Direct index.html requests redirect to its clean URL. The child .htaccess adds a restrictive content security policy and disables caching. Other subpages retain noindex headers. These are requests to compliant crawlers, not authentication or a guarantee of removal from all search engines.

robots.txt permits crawling so search engines can read noindex responses. The sitemap lists only the root. Old /de/, /en/, legacy HTML/PDF files and unlisted legacy routes return 410. Unknown room tokens fall through to the existing host-only handler, which returns 404 unless separately configured. The old site backup is backup-before-private-room-20261019; restoring it reopens old routes.

The root indexing exception uses THE_REQUEST so it survives Apache's internal rewrite to index.html. Do not add a host-wide noindex override that also blocks the public root. A host-wide CDN cache must not override room no-store headers.

## Optional host-only rooms

The existing private-room.php remains for separately configured rooms. It uses KICKSCALE_PRIVATE_DIR or a kickscale-private directory next to the document root, with a host-only rooms.json mapping route hashes to random HTML files. This mechanism is NOT used for the owner-approved repository-hosted XING page. Do not upload other customer data or credentials without authorization.

## Verification

Root: 200, index/follow, resource-hub-20261019-r2 header. XING route: 200, noindex, no-store, expected HTML build marker; both clean and trailing-slash routes work. Its explicit index.html route redirects to the clean URL. Wrong route: no room content. Previous public pages: 410. Root sitemap has no room URLs. Check fonts, logo, CSS, all outbound links and responsive layout.

The committed files are deployment-ready; successful live checks, not just a commit, are required before calling a release verified live.
