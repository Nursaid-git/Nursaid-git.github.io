'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7d546087cdd0bfa21d0561020552b8ad",
"assets/AssetManifest.bin.json": "a66e51df22a32365106aa9152e5a42ac",
"assets/assets/1.png": "cd1a21285178589d970c136bdc9d9b5d",
"assets/assets/1tub.png": "63aa285d2d108c7e5b645e7fed8cb8f5",
"assets/assets/2.png": "adc39ca652522ec960b107e02f8fb620",
"assets/assets/3.png": "b4c5587fea5d1de73f7e30038f9bfc24",
"assets/assets/4.png": "64cbf8cb5dffb7d17a876cba3a198277",
"assets/assets/5.png": "f432f13c582248d58da1f3ec928b6639",
"assets/assets/5cf.png": "adf4a602a702029ff3249333b9e35c8f",
"assets/assets/adilet.jpg": "96846336b4346654792e22b86d7b55b4",
"assets/assets/aple.png": "9ae0fe0dade554f8093e744a1d9fa3e0",
"assets/assets/apple.png": "7cf1df47e9806619bbd2410c988b5ba7",
"assets/assets/arabia.png": "ed6a4a91c4f1e47cc54fc582a3d00a04",
"assets/assets/ava.jpg": "163e2122c6bd719f68757b1ca4bfdfa6",
"assets/assets/baby.png": "7241e0e3b6d54f2e0310c799067e935c",
"assets/assets/Bag%25203.png": "d5d380254407353689dde9aa0e48f587",
"assets/assets/bag.png": "b496ffacdfb617ca5f58832728cdd145",
"assets/assets/bakery.png": "da80094c748b225e4c4e8a3da50dfc99",
"assets/assets/bangladesh.png": "cf72c5f221fe97cc90cf92cf19730bff",
"assets/assets/bank.png": "1410a2b6ecdaeceebe21f72cd6678f73",
"assets/assets/beverage.png": "ff3a8923c5fcb9a91af2df4787509ebc",
"assets/assets/bird.png": "51749ca57700581903634f0cac0f5625",
"assets/assets/bishkek.jpg": "2dfc90d01f257ff9cb3557287925db77",
"assets/assets/box.png": "efa341f487a57d98b696099224790d68",
"assets/assets/bread.png": "510cf352bcf617286eca7b28f07a3ce6",
"assets/assets/britain.png": "50a8c91189604f5ac699a37d717a65a5",
"assets/assets/bro.png": "410dd22def1750de76e02e58cc0c51d3",
"assets/assets/bro1.png": "59530de8f6b0860036ae786141ab262d",
"assets/assets/bro2.png": "29fe85e4798502739c84156846296a65",
"assets/assets/broccoli.png": "de75b8cc675789d64506ff69a072d8e6",
"assets/assets/butter.png": "4ba1e768d544c76016088759d461f9c3",
"assets/assets/Button.png": "8152f71e8822d7853e8ef7bb4b7f2462",
"assets/assets/card.png": "20d443b0d37792d76aad24d7cbc7f4c0",
"assets/assets/carrot.png": "117f2a26a3dc27394f2aba3d9ee75fa2",
"assets/assets/Check%2520Point.png": "a44590a5a05f4a5f1e6780d171698d32",
"assets/assets/chingle.png": "2ea93a6bf0acfc8f8e6727c7a768a9ff",
"assets/assets/Chpoint.png": "a665be3d55caebdff4b6077d444d341d",
"assets/assets/clock.png": "d49f4fc4525a2ee86b3fd09c1375f780",
"assets/assets/cola.png": "fca770a663af7a033e5665345e95c3c1",
"assets/assets/Comment.png": "0608666ab4791446dea7f20183932f2c",
"assets/assets/dietcoke.png": "38e9b75cf29b24d69244ab1d854b6bc8",
"assets/assets/dinn.png": "41b87a10e471932edf665a6ec5750667",
"assets/assets/dollar.png": "1b9c45e890f0a4e9c7510e0ec9c19d18",
"assets/assets/edible.png": "13c95fcc83c4e85ae02b9ae87a4f64c7",
"assets/assets/edit.png": "9823e2458f07a823c91402109bda5e0c",
"assets/assets/eggs.png": "7236b5369a23cf71a85f57cfd19c1c5c",
"assets/assets/Ellipse%25204%2520(1).png": "e3263a31da53dfda60ee371f6dce4e21",
"assets/assets/Ellipse%25204%2520(2).png": "d9aa68903f8f20a9165f062ce0f32c46",
"assets/assets/Ellipse%25204%2520(3).png": "afa143c656f874807c53b27e0ddf2d8b",
"assets/assets/Ellipse%25204%2520(4).png": "8ecc3445fa31eb7668f08c2fc0bfbba6",
"assets/assets/Ellipse%25204.png": "9c3864922250f57ffe674dc985f2b901",
"assets/assets/Entertainment.png": "4790c824297d6b02b87763b94cb8136f",
"assets/assets/facebook.png": "1d5c32a40d10c28ebb9ed77f1d058875",
"assets/assets/fcbk.png": "9af03250a0ac6f069635f823811bb5b2",
"assets/assets/fingerprint.png": "56257b029930721d6a8933a079fb8f20",
"assets/assets/food.png": "9be79df8ac8ce3d61f91c215e1785aec",
"assets/assets/frame.png": "e9660f21aece5034b2ed763484ce5836",
"assets/assets/France%25201.png": "550d5d78a4ee9af4f2ed1fc644df91d2",
"assets/assets/Germany%25201.png": "fbb2e512a8cf9797eba9120181ee0d23",
"assets/assets/ggle.png": "3b9edf871982c19be8d6f12e1b174113",
"assets/assets/Gift%2520Funtional.png": "b30cbc2d6db715a8ebad65d82459a268",
"assets/assets/girl.png": "cdae26a126900fda7fca5cd3fc665680",
"assets/assets/girl1.png": "a6cf1e0c154e115e52a8c1a5647cc682",
"assets/assets/google.png": "ae4af3f50ed6017df1e04ac703e0fa4c",
"assets/assets/Groceries.png": "f69586bbf0cce2aa0c511b1d03c61e95",
"assets/assets/grocery.png": "7f292050737e03e4dde59c5942d0c5be",
"assets/assets/group.png": "00389ccac387a720e50825c648b4c0a1",
"assets/assets/header.png": "41d68ff030db94dc012f353018f8a88a",
"assets/assets/help.png": "2184eb95ace9d32e47d40c01941ca42d",
"assets/assets/icn1.png": "33aa2da6270ae5f418304880ea253cf2",
"assets/assets/icn1h.svg": "9bd59fb874a6fd9a812807f8aa00b65d",
"assets/assets/icn2.png": "020cccb375391d01e71efa43ac5a25e8",
"assets/assets/icn3.png": "b3470bb55c008d1acd299af657e8d326",
"assets/assets/icn4.png": "b97cfc13dfcb782437c5d7ab90ee8c48",
"assets/assets/icon1.png": "07b9629e625f8ba24f611a5fa11ad005",
"assets/assets/icon2.png": "ac2576b83644daf7563eaa6758508d13",
"assets/assets/Icons%2520(1).png": "dfcf8fe68ba43f8e67f299a08af50cf0",
"assets/assets/Icons%2520(2).png": "cdbdae051ad2293f77153447655bb81b",
"assets/assets/icons%2520(3).png": "c33092bfdcc103ef038ed41a9a479a36",
"assets/assets/icons%2520(4).png": "67bd6c9ca9730df72f85a4fd7e001e80",
"assets/assets/icons%2520(5).png": "5243ec87077ec68efc1e5e85e56ec976",
"assets/assets/illustration.png": "c4309b9d6cd58090b4a2ee86456fb627",
"assets/assets/imag.jpg": "d5f9f6876899a9c9b251e9d0a76ff2d9",
"assets/assets/imag1.jpeg": "93feaad09c6c98228c06896bab1acc68",
"assets/assets/images.jpg": "90faddda65b8ba4ababa1e89d3e3ca16",
"assets/assets/img3.jpg": "1af6fb26274658b82b5038a35a68dffb",
"assets/assets/img4.jpg": "00a35098fe465e8652119e4e1393d77f",
"assets/assets/India%25201.png": "fe1e761da98c301cb81b5bd8befd40c1",
"assets/assets/inst%2520logo.png": "ef4a4a35020e9170b18f045a94a6ace1",
"assets/assets/Inst1.jpg": "fa738539e2c7a711d94ef1d959ae1762",
"assets/assets/inst2.jpg": "adf76fb7a280618478708d72824f189b",
"assets/assets/Italy%25201.png": "722e18faed582f1c98278a9ce6b3209d",
"assets/assets/Japan%25201.png": "f90801f34e473a00b82dd93322acfebe",
"assets/assets/juice.png": "8ffd8f21247c13af61f2620f229d319a",
"assets/assets/like.png": "55e7aba0c2886cb9ab05cf34b28d1797",
"assets/assets/Line%25204.png": "ae462d1ef7297370161a89f78249da2a",
"assets/assets/logout.png": "ce408bf851e07bbb52c5161d1374fe5c",
"assets/assets/logo_inst.png": "85ef399e7d3ac9456f6f7c802d74e03b",
"assets/assets/makgregor_1.jpg": "3473144e16ce9a13435aa69268ef1d29",
"assets/assets/map.png": "3058c118c215e538eb8550c524aae5f6",
"assets/assets/map1.png": "6830fad8c3d6402a47e444ca506e7cd6",
"assets/assets/mastercard.png": "11b35999c319616c2fd9fc0a56f40902",
"assets/assets/meat.png": "aaebc9b844cd8805643d072c11cbd04d",
"assets/assets/Medicine.png": "75c9d83eeb0ddd18d70aba8f98de9aec",
"assets/assets/Medicine1.png": "64ce02fc0fca654147caf9154846960b",
"assets/assets/mointain.jpg": "8ff5998cbdfe5a0c4216c8f49e78d861",
"assets/assets/More.png": "e0de140d3a66e7d1d97625f9f39d7408",
"assets/assets/mountain.jpg": "42542bae93528b75fa98cf79b145cd07",
"assets/assets/notif.png": "1c48fa014cf27368c2041dc6f92ffce7",
"assets/assets/no_task.png": "3eb21384d04a950026ad7643d7d9b607",
"assets/assets/ntf.png": "ff68d24a516aef0b2dc98183422a6e87",
"assets/assets/nurs.jpeg": "b155d6177845204e584b6fd1b458233c",
"assets/assets/nurs1.jpeg": "41a5e5a76eb3c1fe1e5d9bfc7deed95a",
"assets/assets/Oil.png": "efbd62eeeca56426b8b51f82da863217",
"assets/assets/orangejuice.png": "1f4fcded8f63f91bad30751a4491d3cb",
"assets/assets/Oval.png": "297a9fc47f15604e03ecf4dd6dfc6198",
"assets/assets/paypal.png": "04d190b0c7e7c72f9ee7dfb4c817405a",
"assets/assets/peach2.png": "683797f7056922089d96d7fb740b1938",
"assets/assets/pepsi.png": "0798812927afa42af1963648685fea27",
"assets/assets/person.png": "28ddd6d11bccd425693ef0bb776d14d1",
"assets/assets/Poland%25201.png": "3625fd4be819bb8a593e4deb73ff7b83",
"assets/assets/pool.png": "f7c71860b1b7414b1a17cd23d3d64c92",
"assets/assets/Portugal%25201.png": "c89d8e2534c74e1dcffd671073ab80c6",
"assets/assets/profile.png": "46cacf5744c89ec545cff4cff2276bfd",
"assets/assets/redjuice.png": "42c37c65451b8395bc20a10d8759d6e3",
"assets/assets/Rent.png": "2d31445f56ef7126441744a9aef2b930",
"assets/assets/Russia%25201.png": "62ad708d58d65524b70f17d3f0db5618",
"assets/assets/Saving.png": "a35454775796216ba434229f120e851a",
"assets/assets/security.png": "cb22e403c26ea71fa882c00cdb372d14",
"assets/assets/shop.png": "790b5f141ab4c8a923b1d7694901a5dd",
"assets/assets/sign-out.png": "28f744137ce7083a0e46df7231453974",
"assets/assets/sign.png": "7e4071bd1613f1fae1df766a3df63d7d",
"assets/assets/Snacks.png": "5d5c58f8b433eff1e034a3f298bfc487",
"assets/assets/South%2520Korea%25201.png": "a587b679a6c8bfb331e78bdb7ba7cce2",
"assets/assets/Spain%25201.png": "84df0397a73720528c7def669d59e205",
"assets/assets/sprite.png": "bcf5f887e7b71422ea7ad0efabe3fe1e",
"assets/assets/table.png": "42fee458b726873f19b2aa84dca82312",
"assets/assets/taski.png": "1ef18850af0f15bd645fb115e28786f0",
"assets/assets/terms.png": "d141689cc04c7fd128ec9c6bf6ba82ec",
"assets/assets/text1.png": "ea5fe5473bbe18b15dfcd77bdfa787ba",
"assets/assets/text2.png": "0e00e16fc94b33ee8ede4254c4c38432",
"assets/assets/toggle.png": "fa7b6518a349ac9b36f5cf74298d0bd6",
"assets/assets/tokyo.png": "a26f1d08abf9874cf4789c8cb42cd6c7",
"assets/assets/Transport%2520Funtional.png": "b58d622385a404cc2fa6157d88cf1a05",
"assets/assets/United%2520Kingdom.png": "7218ee484eea85ef0b14771fef632ea9",
"assets/assets/vacuum.png": "2520f12fef684a1829ab7c5f58d80140",
"assets/assets/Vector.png": "d44d1aa04e62179610735e75931227bb",
"assets/assets/vegetable.png": "a94f2891476fb602f2f2a43ddba9877a",
"assets/assets/visa.png": "ddad596d3862df5b98fb5253c945862f",
"assets/assets/voice.png": "2e6714b24638dc787ba5ecaad7d3c92c",
"assets/assets/wif.png": "509b7a702eb244b843767cee29d7e57a",
"assets/assets/wood.png": "515d8f5b8822f65dc1476ab91837a854",
"assets/assets/_bird.png": "cbca129a9d56b3a49995a77194a97945",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ffb1d944c8993bc7cd023c43927c605c",
"assets/NOTICES": "124442a9f0d2bcbfd92dc0ee868cb37a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d3b27f1a84f7be7e5c1a10898ff3d760",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "36819c9eec32db32c26c214660f445a8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3ac18a339ff722c9855a47c18781824",
"/": "b3ac18a339ff722c9855a47c18781824",
"main.dart.js": "6266a56dfb3b69f2cea9174868ccadc7",
"manifest.json": "d82887f113432b4b5d993191e1a58c7c",
"version.json": "140fe6951f41b220f2909b82f37044df"};
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
