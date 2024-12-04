'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e38027c1fcf8576e16b80ab282a2b128",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"assets/AssetManifest.bin": "5e8d6c40f3ce436ca623b05192bdc164",
"assets/AssetManifest.bin.json": "ba6c4c985a255a0a0aaa082d6eb8fd78",
"assets/AssetManifest.json": "26c1b2f9cc9ac84e2469323fdd0f0962",
"assets/assets/Fonts/Fustat-Bold.ttf": "39cfc332511bb5042c7ef99eac66636f",
"assets/assets/Fonts/Fustat-Regular.ttf": "a1e1f2fad3b90e73cd5acd9a06668692",
"assets/assets/icons/MyCustomIcon.ttf": "643d607231608a8ef85f621a4e229bd8",
"assets/assets/images/android12Splash.png": "9a84d2c18d9e5431e03d6c29e13c0c93",
"assets/assets/images/banners/Frame%252056.svg": "00a3f31201fa489c4443702559eecdf1",
"assets/assets/images/banners/home_banner.svg": "c82f8374940a7e2efbd3c64007638ca9",
"assets/assets/images/categories/dessert.png": "b33eeb3d426741e5cd3256c196b9a290",
"assets/assets/images/categories/drnks.png": "47308fee6f8ecd24b75650016797279e",
"assets/assets/images/categories/grill.png": "a3b2f67cbc91ac2fa2bf417a7122ebd4",
"assets/assets/images/categories/hot_drinks.png": "786ed880ba8bdd993ab5e2b849378a15",
"assets/assets/images/categories/mandy.png": "f26be692fbaf09a76abc72596a9ea403",
"assets/assets/images/categories/mshawe.png": "80e5da57ab420f057e2d78326e32fcf7",
"assets/assets/images/categories/new.png": "c043f1fcc06ea9883a3d9234776a02be",
"assets/assets/images/categories/rokn_elmtbkh.png": "709340a1015fd86fc13224e74d307a03",
"assets/assets/images/categories/smothe.png": "d439f0eb0bde6b74834cf7099febbee8",
"assets/assets/images/categories/swany.png": "c6d88f696039c4afde7b906e9dd02f45",
"assets/assets/images/categories/tasa.png": "d26a94f0f961c0aac873b39450199061",
"assets/assets/images/categories/twagan.png": "aaada13a626cbb44f95f6212fff16b41",
"assets/assets/images/image%252016.png": "5582cac6a94e36877754c4c018ff793e",
"assets/assets/images/image%252050.png": "784e612cb530d419a6cfc43378cf8a72",
"assets/assets/images/login_background.jpg": "08c8226e60cb572808d581970679c242",
"assets/assets/images/logo%2520animation.gif": "41535b73faded1c61b8fdd1eba28bd7c",
"assets/assets/images/orderSuccess.png": "8f0b36af524fbfe9457170fe00a7ba2e",
"assets/assets/images/Splash.png": "510e18784754ed800e3afe0c061a3d47",
"assets/assets/translations/ar.json": "fcdfefce78bc6febbb3084630454e057",
"assets/assets/translations/en.json": "96e4676b9468a54a6097e0219bad44a1",
"assets/FontManifest.json": "2ed4fae7836a4378f14c2d3fc28fb78d",
"assets/fonts/MaterialIcons-Regular.otf": "e2c9a8e8fc8b85e97f5d45b196b9be8d",
"assets/NOTICES": "f948b6f2f84cf3c5f18dee2eba2a9afb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "20d43233aa78e147e0a24e1303fed805",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "7b4db747960ffa88725eff121b74ea1e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3bbedd6e8a127f637b0636e5951024c5",
"icons/Icon-192.png": "70f90ef4415e472f4031fc35d56691ee",
"icons/Icon-512.png": "4b2cd14b6119188b5519a47b304defa1",
"icons/Icon-maskable-192.png": "70f90ef4415e472f4031fc35d56691ee",
"icons/Icon-maskable-512.png": "4b2cd14b6119188b5519a47b304defa1",
"index.html": "5e9b6e22c3d2a23746ff395d7da618b7",
"/": "5e9b6e22c3d2a23746ff395d7da618b7",
"main.dart.js": "fb6201fb23bfca601e2e715c45109684",
"manifest.json": "026315bf2d02f0ec030539d850f5d30a",
"splash/img/dark-1x.gif": "8865d64412ff0b2171fa34c8909a5603",
"splash/img/dark-1x.png": "a19684aeb6e33fe1bc870d8fc0334211",
"splash/img/dark-2x.gif": "240a92df6b319f0ac4d6a1e69e5f9df1",
"splash/img/dark-2x.png": "543711989088506a220ae66c1a8fb8bc",
"splash/img/dark-3x.gif": "6351d93fafe089cd41e656e26af8ade2",
"splash/img/dark-3x.png": "3957c7f066c8f55fa36cb059f877b79d",
"splash/img/dark-4x.gif": "26b553e764519ce7dceb47a5ac2dde37",
"splash/img/dark-4x.png": "d8dc14c12a44a3a09b84d037d02b859b",
"splash/img/light-1x.gif": "8865d64412ff0b2171fa34c8909a5603",
"splash/img/light-1x.png": "a19684aeb6e33fe1bc870d8fc0334211",
"splash/img/light-2x.gif": "240a92df6b319f0ac4d6a1e69e5f9df1",
"splash/img/light-2x.png": "543711989088506a220ae66c1a8fb8bc",
"splash/img/light-3x.gif": "6351d93fafe089cd41e656e26af8ade2",
"splash/img/light-3x.png": "3957c7f066c8f55fa36cb059f877b79d",
"splash/img/light-4x.gif": "26b553e764519ce7dceb47a5ac2dde37",
"splash/img/light-4x.png": "d8dc14c12a44a3a09b84d037d02b859b",
"version.json": "e689774d31ee57e32a9b58d8eec315f5"};
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
