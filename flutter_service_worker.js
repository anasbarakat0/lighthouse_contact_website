'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "763d222671e65d97598e3b5c29f32480",
"assets/AssetManifest.bin.json": "bbd4e4d6dfb54c829fdc8af4ea4a788d",
"assets/AssetManifest.json": "89fd3236da676de16d802b42f6312cd4",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-Black.ttf": "5bff81dd470cb3a2d8da3c41b7d96953",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-Bold.ttf": "34886bd59d48cf9113e1e9386bee615e",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-ExtraBold.ttf": "4db4bdb3112335745b2667d7dff2f8dd",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-ExtraLight.ttf": "3f551ee155df31dda67c1ce1bd06bb09",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-Light.ttf": "23517c64b528b3c744bfb3be94e58836",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-Medium.ttf": "0ac496d1b4dfec61defc0488ddc8f9dd",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-Regular.ttf": "600b529eb4849a54dde020e3ea389de2",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-SemiBold.ttf": "2cc825f4e5161acaa6fcef6c011129eb",
"assets/assets/fonts/NotoKufiArabic/NotoKufiArabic-Thin.ttf": "94a871f738e42e4574ceca4a175d8d77",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-Black.ttf": "4abfaf19fced2a48646117b9cdd69b50",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-Bold.ttf": "5caa99e4d2a1fb684447e85235c2d7de",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-ExtraBold.ttf": "a8d27156273e8ee6bb178b8c9e3d19ad",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-ExtraLight.ttf": "258bb3fecc5f8fe3a2b3cbd4470df78e",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-Light.ttf": "47a5b22da8d3ab732e9a0ff698954051",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-Medium.ttf": "2f8a7f1cb1b16608c13b019c92343b19",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-Regular.ttf": "8808bcecf3a759196494f782af4ea099",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-SemiBold.ttf": "eb3ec524991baf87ee5a6057223789d9",
"assets/assets/fonts/NotoSansArabic/NotoSansArabic-Thin.ttf": "512a8529972871b1bb8a7ac0d2042b26",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Extrabold.ttf": "ecce738438b07e0f2700c264633fc55b",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Light.ttf": "2ed3c7d734a775bde270e704aa7d315f",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Regular.ttf": "386c8ff06aaa9d3ea14528a5703b6ec5",
"assets/assets/fonts/ProximaNova/Proxima_Nova_Semibold.ttf": "3510e34fcc8e060e13e69a6e9272ba82",
"assets/assets/fonts/Raleway/RalewayBold.ttf": "3b1a9a7b05c1e411253797b2fa3d1e91",
"assets/assets/fonts/Raleway/RalewayExtraBold.ttf": "a26b54e7801f023af6ec11034ff42879",
"assets/assets/fonts/Raleway/RalewayExtraLight.ttf": "ad7fae7a6822ad4959bec49d3a559568",
"assets/assets/fonts/Raleway/RalewayHeavy.ttf": "3fd02d9d10c0479c7b15fa0cbc268513",
"assets/assets/fonts/Raleway/RalewayLight.ttf": "010aae55eee63f16095bc47f7cffae1b",
"assets/assets/fonts/Raleway/RalewayMedium.ttf": "fa56e8c122bb66dbcb913e416bb54c97",
"assets/assets/fonts/Raleway/RalewayRegular.ttf": "6e4a9679e65cc320746c3e5d48e51f28",
"assets/assets/fonts/Raleway/RalewaySemiBold.ttf": "411ef03a8252675e491bf05a428d56e6",
"assets/assets/fonts/Raleway/RalewayThin.ttf": "b2a0b765ded79576d3bb4dbffc65550f",
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
"assets/FontManifest.json": "91cd1b517eca50b8cea218605abe7de1",
"assets/fonts/MaterialIcons-Regular.otf": "c82c1d84f77428a3e09af51490d769b4",
"assets/NOTICES": "94294a8c2e8b94b63e6e00ac5b69429c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "9cc33f455854babc97577f60321eac5b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d354389250535861d3276f5330f0bd59",
"icons/Icon-192.png": "cd69c3b57d037a0414ea86477ff93f71",
"icons/Icon-512.png": "523da0b77727d39eb1f1af690b0be6dc",
"icons/Icon-maskable-192.png": "cd69c3b57d037a0414ea86477ff93f71",
"icons/Icon-maskable-512.png": "523da0b77727d39eb1f1af690b0be6dc",
"index.html": "9b9f883958fc9f86e8100684a6e05a97",
"/": "9b9f883958fc9f86e8100684a6e05a97",
"main.dart.js": "8492acf788e17de551dce9f5588c9df9",
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
