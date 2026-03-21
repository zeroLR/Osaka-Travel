const CACHE_NAME = 'osaka-travel-v9';

const LOCAL_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icons/icon.svg',
    './css/style.css',
    './js/app.js',
    './js/data/itinerary.js',
    './js/data/prep.js',
    './js/components/Navigation.js',
    './js/components/ItineraryView.js',
    './js/components/PrepView.js',
];

const CDN_ASSETS = [
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
];

// Install: pre-cache all local assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(LOCAL_ASSETS))
    );
    self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Fetch: cache-first for local & CDN assets, network-first for others
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle GET requests
    if (request.method !== 'GET') return;

    const isCDN = CDN_ASSETS.some(cdn => request.url.startsWith(cdn));
    const isLocal = url.origin === self.location.origin;

    if (isLocal || isCDN) {
        // Cache-first strategy
        event.respondWith(
            caches.match(request).then(cached => {
                if (cached) return cached;
                return fetch(request).then(response => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
                    }
                    return response;
                });
            })
        );
    }
});
