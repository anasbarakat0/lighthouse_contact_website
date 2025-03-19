'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0177410263490eadde6a87c2efe5a460",
"assets/AssetManifest.bin.json": "3e10148d789d088be324b8ee05b771a6",
"assets/AssetManifest.json": "db80d24bbb446d19ec15b0f3c518bf88",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Extrabold.ttf": "ecce738438b07e0f2700c264633fc55b",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Light.ttf": "2ed3c7d734a775bde270e704aa7d315f",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Regular.ttf": "386c8ff06aaa9d3ea14528a5703b6ec5",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Semibold.ttf": "3510e34fcc8e060e13e69a6e9272ba82",
"assets/assets/icons/dark-1024x1024.png": "7e9b1defcca2788a0bfc5f07fc6dadc9",
"assets/assets/icons/dark-432x432%2520.png": "6624a846a4980f66c6c9a4f01e4a1268",
"assets/assets/icons/dark-710x599.png": "f3b1cfffd015ae907ce2dfb322d12054",
"assets/assets/icons/light-1024x1024.png": "f3857787194fc94093c69ad5ef0fb207",
"assets/assets/icons/light-432x432.png": "5e8d5572d31f9311009a2950f59be517",
"assets/assets/icons/light-710x599.png": "d581acd56f5e12e8e366fc15ebe215bc",
"assets/assets/icons/logo-1024x1024.png": "43a14ab32d9de6deab05570289b768ce",
"assets/assets/svg/ar-logo.svg": "941a840551b07bad7875dfd9b622de22",
"assets/assets/svg/dark-ar-logo.svg": "7cf0678f86e21fa7ad216018df940e76",
"assets/assets/svg/dark-en-logo.svg": "eee27cbfc7b2d8dc34675d8b9f126904",
"assets/assets/svg/en-logo.svg": "324d8637b22547e5a2689be4edf440bd",
"assets/assets/svg/lighthouse_ch.svg": "69470d39a43200e882231366432b269b",
"assets/FontManifest.json": "09f217c721ee43f228e94fdafa49d283",
"assets/fonts/MaterialIcons-Regular.otf": "976c452ab04cd0feddf87cec08204625",
"assets/NOTICES": "e3ca6a91df9c9196240af9a9e9bd4ba4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "9cc33f455854babc97577f60321eac5b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7e26b94bdc4e487c2d6edf92eff2b64c",
"icons/Icon-192.png": "cd69c3b57d037a0414ea86477ff93f71",
"icons/Icon-512.png": "523da0b77727d39eb1f1af690b0be6dc",
"icons/Icon-maskable-192.png": "cd69c3b57d037a0414ea86477ff93f71",
"icons/Icon-maskable-512.png": "523da0b77727d39eb1f1af690b0be6dc",
"index.html": "9b9f883958fc9f86e8100684a6e05a97",
"/": "9b9f883958fc9f86e8100684a6e05a97",
"main.dart.js": "bbc7d64a5949c7a6c4ce82cec057a5e2",
"manifest.json": "a32a699d693d2482066bde3c58a055a4",
"version.json": "44d9969b31703eb25de8dafc0e631dfd"};
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
