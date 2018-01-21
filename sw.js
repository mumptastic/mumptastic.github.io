// You have to supply a name for your cache, this will
// allow us to remove an old one to avoid hitting disk
// space limits and displaying old resources
var cacheName = 'v1';

// Assesto catche
var assetsToCache = [
//   '/css/main.min.css',
//   '/js/scripts.js',
//   '/images/unicorncode.svg',
//   '/images/unicorn-single.svg',
//   '/fonts/icomoon.woff',
//   'https://fonts.gstatic.com/s/alegreyasanssc/v3/AjAmkoP1y0Vaad0UPPR46zqXxEMZsh1tOw6O6jsjRmU.woff2'
];

self.addEventListener('install', function(event) {
    // waitUntil() ensures that the Service Worker will not
    // install until the code inside has successfully occurred
    event.waitUntil(
      // Create cache with the name supplied above and
      // return a promise for it
      caches.open(cacheName).then(function(cache) {
          // Important to `return` the promise here to have `skipWaiting()`
          // fire after the cache has been updated.
          return cache.addAll(assetsToCache);
      }).then(function() {
        // `skipWaiting()` forces the waiting ServiceWorker to become the
        // active ServiceWorker, triggering the `onactivate` event.
        // Together with `Clients.claim()` this allows a worker to take effect
        // immediately in the client(s).
        return self.skipWaiting();
      })
    );
  });