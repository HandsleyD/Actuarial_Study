// Service worker: makes the study site work offline after one online visit.
//
// The site is static and its store.js is already local-first (every card score
// is written to localStorage and queued for upload), so offline support is
// mostly a matter of keeping the app shell, card data and third-party
// libraries in the browser cache.
//
//   - Same-origin files (HTML, JS, CSS, data): network first, falling back to
//     the cache. Online you always get the latest deploy; offline you get
//     whatever was last fetched.
//   - CDN libraries and fonts (KaTeX, supabase-js, Google Fonts): cache first
//     — they're versioned/immutable.
//   - progress.md on raw.githubusercontent.com (the module-status baseline):
//     network first, cache fallback, stored without the cache-busting ?t= query.
//   - Everything else (notably the Supabase API) is left alone: uploads are
//     already queued by store.js and retried when back online.
//
// Bump CACHE to drop every cached file (only needed if this file's rules change).

const CACHE = "actuarial-study-v2";

const CDN_HOSTS = ["cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"];

async function cacheUrl(cache, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    await cache.put(url, res.clone());
    return res;
  } catch {
    return null;
  }
}

// Pull url(...) references out of a stylesheet (KaTeX and Google Fonts CSS
// point at font files that also need to be available offline).
function cssUrls(text, base) {
  const out = [];
  const re = /url\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(text))) {
    const raw = m[1].trim().replace(/^['"]|['"]$/g, "");
    if (raw.startsWith("data:")) continue;
    if (/\.(ttf|woff)(\?|$)/i.test(raw)) continue; // every browser we care about takes woff2
    try {
      out.push(new URL(raw, base).href);
    } catch {
      /* ignore malformed */
    }
  }
  return out;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // Discover the app shell from the current index.html so precaching
      // follows the ?v= cache-busting versions without this file listing them.
      const shell = [new URL("./", self.location).href];
      const indexRes = await cacheUrl(cache, new URL("index.html", self.location).href);
      if (indexRes) {
        const html = await indexRes.clone().text();
        const re = /(?:src|href)="([^"]+\.(?:js|css)(?:\?[^"]*)?|https:\/\/fonts\.googleapis\.com\/[^"]+)"/g;
        let m;
        while ((m = re.exec(html))) shell.push(new URL(m[1], self.location).href);
      }
      const uniq = [...new Set(shell)];
      await Promise.all(
        uniq.map(async (url) => {
          const res = await cacheUrl(cache, url);
          if (res && (/\.css(\?|$)/.test(url) || url.includes("fonts.googleapis.com"))) {
            const css = await res.clone().text();
            await Promise.all(cssUrls(css, url).map((u) => cacheUrl(cache, u)));
          }
        })
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

// `keyUrl` lets callers store/look up under a normalised URL (e.g. without a
// cache-busting query string) so the cache doesn't grow a copy per request.
async function networkFirst(request, keyUrl) {
  const cache = await caches.open(CACHE);
  const key = keyUrl || request;
  try {
    const res = await fetch(request);
    if (res && res.ok) cache.put(key, res.clone());
    return res;
  } catch (err) {
    const hit =
      (await cache.match(key)) ||
      (request.mode === "navigate" ? await cache.match(new URL("index.html", self.location).href) : null);
    if (hit) return hit;
    throw err;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request);
  if (hit) return hit;
  const res = await fetch(request);
  if (res && (res.ok || res.type === "opaque")) cache.put(request, res.clone());
  return res;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(req));
  } else if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(cacheFirst(req));
  } else if (url.hostname === "raw.githubusercontent.com") {
    event.respondWith(networkFirst(req, url.origin + url.pathname));
  }
});
