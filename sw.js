self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('simple-sw-v1').then(function (cache) {

      return cache.addAll([
        './',
        './index.html',
        './about.html',
        'https://fonts.googleapis.com/css?family=Cutive+Mono',
        './about.css',
        './main.css',
        './main.js',
        './404.html',
        './favicon.ico'
      ]);
    })
  )
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(cacheNames.map(function (thisCacheName) {
        if (thisCacheName !== cacheName) {
          return caches.delete(thisCacheName);
        }
      }))
    })
  )
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});