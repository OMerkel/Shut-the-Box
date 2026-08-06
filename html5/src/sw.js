const CACHE_NAME = "shut-the-box-v4";

const ASSETS_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./css/index.css",
    "./js/hmi.js",
    "./js/hmi_helpers.js",
    "./js/locale_dictionary.js",
    "./js/locale_bundle_en.js",
    "./js/locale_bundle_de.js",
    "./js/locale_bundle_it.js",
    "./js/locale_bundle_fr.js",
    "./js/locale_bundle_es.js",
    "./img/1w6-1.png",
    "./img/1w6-2.png",
    "./img/1w6-3.png",
    "./img/1w6-4.png",
    "./img/1w6-5.png",
    "./img/1w6-6.png",
    "./img/toggle-amount-64.png",
    "./img/oliver-sliabh_liag.jpg",
    "./img/icons/favicon.ico",
    "./img/icons/cc_by_nc_sa.png",
    "./img/icons/shutthebox16.png",
    "./img/icons/shutthebox32.png",
    "./img/icons/shutthebox48.png",
    "./img/icons/shutthebox60.png",
    "./img/icons/shutthebox64.png",
    "./img/icons/shutthebox90.png",
    "./img/icons/shutthebox120.png",
    "./img/icons/shutthebox128.png",
    "./img/icons/shutthebox256.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting()),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) =>
                Promise.all(
                    cacheNames
                        .filter((cacheName) => cacheName !== CACHE_NAME)
                        .map((cacheName) => caches.delete(cacheName)),
                ),
            )
            .then(() => self.clients.claim()),
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const requestUrl = new URL(request.url);

    if (requestUrl.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request).catch(() =>
                caches
                    .match(request)
                    .then(
                        (response) => response || caches.match("./index.html"),
                    ),
            ),
        );
        return;
    }

    event.respondWith(
        caches.match(request).then(
            (response) =>
                response ||
                fetch(request).then((networkResponse) => {
                    if (
                        !networkResponse ||
                        networkResponse.status !== 200 ||
                        networkResponse.type !== "basic"
                    ) {
                        return networkResponse;
                    }

                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseToCache);
                    });

                    return networkResponse;
                }),
        ),
    );
});
