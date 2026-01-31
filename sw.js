const CACHE_NAME = 'winexpert-v1';
const urlsToCache = [
  '/ustanovka-Windows-Tbilisi/',
  '/ustanovka-Windows-Tbilisi/index.html',
  '/ustanovka-Windows-Tbilisi/index.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
