'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "75a140c7384226804f90e8480ee6ab85",
"assets/AssetManifest.bin.json": "7e7e8d8aed1eeef7e1beb37a15db9be7",
"assets/AssetManifest.json": "eb00bbb75e9b75476ff0fcb267e71866",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/images/bg.jpg": "95d69d81c995156a856090e2e9f55ff8",
"assets/images/bg2.jpg": "74a0608afacbf0dffbb0768cf9f71e10",
"assets/images/f1.jpg": "6a2cf1457144846f12694962a4ddb2e4",
"assets/images/f2.jpg": "f9958ec033e644c2de4a51fcfbdd9315",
"assets/images/f3.jpg": "f3e3ef249b90e0721aa869ed59a9d47f",
"assets/images/f4.jpg": "8fd3fac5610d1579c1bf98c4308061ab",
"assets/images/f5.jpg": "8f12f80847b5014b1cc72794a7ad9ec8",
"assets/images/f6.jpg": "16cfb105b84e009519c757e343ee32c5",
"assets/images/f7.jpg": "f8b283f3ba1c17d72dd55d27e7585945",
"assets/images/f8.png": "c2f94b1350ece3f57027871fbf1c3d19",
"assets/images/f9.jpg": "90059d13dadc47bcc1ece3745ecfee89",
"assets/images/pic1.jpg": "2530ea8ec7f128929f3597f4284528a9",
"assets/images/pic10.jpg": "f283c3d20b7a5f4903e42a72e1e8228a",
"assets/images/pic11.jpg": "43d7ab3d0d5eb1f68f03d6257b4747f2",
"assets/images/pic12.jpg": "0067834c019d8c5e6382fa9cabbc5f69",
"assets/images/pic13.jpg": "2cc82d2b6b1c6f6b680aba65b8ee326c",
"assets/images/pic14.jpg": "4635ece23aa25bcb31dfbcd1352f6d48",
"assets/images/pic15.jpg": "1d23bdea1d225ff2adf733cb9fd2b65d",
"assets/images/pic16.jpg": "c8caf3e075503010cef774abf0d9be87",
"assets/images/pic17.jpg": "f32c57bc3c7b1ecd177092c80a60ee7e",
"assets/images/pic18.jpg": "42f10909fcdd7bb06a989c623dfbc5d7",
"assets/images/pic19.jpg": "7b98a6de8102c0177dafbea5efb7cbc2",
"assets/images/pic2.jpg": "03d386e0ef19054f95f214687f54c3f3",
"assets/images/pic20.jpg": "e160ad2cc9fffc05ba19abeb37b19ec3",
"assets/images/pic3.jpg": "d26de8c7329ab5a55d8c72eaabd6b295",
"assets/images/pic4.jpg": "270a9fa160fa557c1fa083306fbcedb3",
"assets/images/pic5.jpg": "52fdaa13b7360dc348ae5c54c7c6370f",
"assets/images/pic6.jpg": "9b8e0876ed439e77911dea4fd8d85e57",
"assets/images/pic7.jpg": "41c6f7d9baddf31ae9f277b0b7c0c7cc",
"assets/images/pic8.jpg": "6b9d160179b208a0b7a584b926d18b86",
"assets/images/pic9.jpg": "1fb94419d167d4e277353832d825b361",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3794888fdffcc8454306aea949da1eac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c3daaa3361fc15a104ef2266f418480",
"/": "8c3daaa3361fc15a104ef2266f418480",
"main.dart.js": "03b3efe9020a5f7ccc381a1c606eeeae",
"manifest.json": "d5995ff6577488f0d098f68d5db5c8b0",
"version.json": "b4e757b858fd0c911c4be919c17c5954"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
