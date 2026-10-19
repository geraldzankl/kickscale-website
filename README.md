# Kickscale resource hub

Public homepage for https://kickscale.si/ with German/English switching. It links to the official website, free trial, general Sales Room (DE/EN), customer case studies, integrations, Help Center, Trust Center (DE/EN), YouTube, and the sales contact. The contact block uses the phone number and Vienna address published on kickscale.com/impressum.

## Publish

Target: Hostinger Apache/LiteSpeed, repository root, branch main, no build step. PHP 8.1+ is required only for private rooms. Keep the hidden .htaccess file in the document root. Existing assets/ is preserved unchanged, including the official logos and self-hosted Poppins, Instrument Serif and Inter fonts. There are no analytics, embedded videos or third-party asset loads.

A Git push is not proof of live publication. It triggers the site only if Hostinger automatic Git deployment is configured. Otherwise deploy main using this site's Git deployment in hPanel. Purge old host/CDN cache and verify the live responses. The root carries build marker resource-hub-20261019-r1 in the X-Kickscale-Site header.

## Indexing and routes

Only / (including its language query string) is indexable and appears in sitemap.xml. The homepage uses index,follow in HTML and the HTTP header. German is default; English is ?lang=en with a root canonical. Every other route receives noindex,nofollow,noarchive,nosnippet. Private-room HTML must repeat the noindex meta directive.

robots.txt allows crawling so search engines can read noindex. Do not block those pages from crawling and do not disclose private URLs in robots.txt or sitemap.xml. Noindex is not access control and cannot guarantee compliance by every crawler. Existing listings can require recrawling or removal requests.

Old /de/, /en/, legacy HTML/PDF and unlisted paths return 410. Incorrect or unconfigured private links return 404, never homepage content. A backup of the previous site is at backup-before-private-room-20261019. Restoring it reopens the old routes.

The root header exception uses THE_REQUEST rather than REQUEST_URI to survive Apache's internal rewrite to index.html. Test the live header for both root and a private URL after deployment.

## Host-only private rooms

This repository is public. Do not commit customer meeting content, transcripts, PDF exports, room HTML, access links or tokens here. private-room.php is a generic server-side handler; it contains no customer data or private URL. It fails closed until the host-only room configuration has been installed.

Create a directory named kickscale-private next to the document root, outside the public directory and Git checkout. Alternatively set KICKSCALE_PRIVATE_DIR to an absolute private path. Its rooms.json maps SHA-256 hashes of complete route slugs to random 32-hex-character .html filenames in that same private directory. Provision this directory via the authorized hosting/file-transfer connection, not via the public Git repository. Restrict filesystem permissions to the hosting account; PHP must be able to read it. Merge new room mappings rather than overwrite existing ones.

A room slug follows CLIENT_ plus a cryptographically random 64-hex-character token. Publish only the resulting private link to the intended recipients. Do not put it in public navigation, source, sitemap, analytics or issue trackers. The handler sends no-store, no-referrer, noindex and a restrictive CSP. The HTML may load only the site's styles, logos and fonts, with no scripts or third-party embeds. Host/CDN access logs may still contain private paths; restrict log access.

The link is a bearer capability, not an authenticated identity. Anyone holding it can open and forward it. For employee-only access use a separate authentication policy. To revoke a URL remove its entry from the host-private map and purge any cache.

## Deployment checks

Root: HTTP 200 and X-Robots-Tag index,follow. Configured private link: HTTP 200 and noindex plus no-store. Wrong private link: 404. Old pages and repository metadata: 410. Sitemap: root only. Check logo/fonts/CSS/JS, all outbound links, mobile layout and DE/EN switch.

Some requested destination URLs could not be retrieved by the research environment; those URLs were preserved as supplied, not silently replaced. Verify their redirects in the live browser. Production fonts remain the originals; offline previews use fallback fonts rather than distribute font binaries.
