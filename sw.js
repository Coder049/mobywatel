const CACHE_NAME = 'mobywatel-cache-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './mobywatellogo.svg'
  // dodaj inne potrzebne pliki
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