var cacheNames = "simple-sw-v1";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheNames).then(function (cache) {

      return cache.addAll([
        "./",
        "./index.html",
        "./about.html",
        "https://fonts.googleapis.com/css?family=Cutive+Mono",
        "./about.css",
        "./main.css",
        "./main.js",
        "./404.html",
        "./favicon.ico",
        "./manifest.json"
      ]);
    })
  )
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(cacheNames.map(function (thisCacheName) {
        if (thisCacheName !== cacheNames) {
          return caches.delete(thisCacheName);
        }
      }))
    })
  )
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});