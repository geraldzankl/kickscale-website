<?php
// Private content and URL mapping belong on the host, never in this repository.
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow, noarchive, nosnippet');
header('Cache-Control: private, no-store, max-age=0, must-revalidate');
header('Pragma: no-cache');
header('Referrer-Policy: no-referrer');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header("Content-Security-Policy: default-src 'none'; style-src 'self'; font-src 'self'; img-src 'self' data:; script-src 'none'; connect-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'");
header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
function unavailable(int $status): never {
    http_response_code($status);
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'HEAD') {
        echo '<!doctype html><html lang="de"><meta charset="utf-8"><meta name="robots" content="noindex,nofollow,noarchive,nosnippet"><title>Nicht verfuegbar</title><p>Diese Seite ist nicht verfuegbar.</p></html>';
    }
    exit;
}
if (!in_array($_SERVER['REQUEST_METHOD'] ?? 'GET', ['GET','HEAD'], true)) {
    header('Allow: GET, HEAD');
    unavailable(405);
}
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if (!is_string($path) || !preg_match('~^/([A-Z][A-Z0-9-]{1,30}_[a-f0-9]{64})/?$~D', $path, $match)) unavailable(404);
try {
    $directory = realpath(getenv('KICKSCALE_PRIVATE_DIR') ?: dirname(__DIR__) . '/kickscale-private');
    if ($directory === false) unavailable(404);
    $json = @file_get_contents($directory . '/rooms.json');
    if ($json === false) unavailable(404);
    $rooms = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    if (!is_array($rooms)) unavailable(404);
    $name = $rooms[hash('sha256', $match[1])] ?? null;
    if (!is_string($name) || !preg_match('/^[a-f0-9]{32}\.html$/D', $name)) unavailable(404);
    $file = realpath($directory . '/' . $name);
    if ($file === false || !str_starts_with($file, $directory . DIRECTORY_SEPARATOR)) unavailable(404);
    $html = @file_get_contents($file);
    if ($html === false || strlen($html) > 1048576) unavailable(404);
    http_response_code(200);
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'HEAD') echo $html;
} catch (Throwable $error) {
    // Never output exception details or log private URL tokens.
    unavailable(404);
}
