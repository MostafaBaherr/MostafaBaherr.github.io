'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2a043ad6e69c462ec6cfd03c45465c94",
".git/config": "7130f836a148cea0684182c04ebc9ac0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "22541da3e8dbc8a809ac5554b949aae7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65264d742a6c397e9c196e9bd5f35b04",
".git/logs/refs/heads/main": "99dbbb6fd9e1f61ed3f72a74d22201bb",
".git/logs/refs/remotes/origin/main": "5ce9c31af178ef95b75888b9d812a94e",
".git/objects/06/5f6a5493f2855b84a1ad454aed29d7e9efb225": "692f366da9bb51ccbb9fad007f64f513",
".git/objects/07/b5bc6bdc1c317bf7cda7ddbafad810b1fad0cb": "c89de0ed1e5e24167df9a01a0ce54eb2",
".git/objects/08/f6fc730249c604d4e4bfe581c01f913ff14c18": "976d4e44db54ee18429db54b9dc05a51",
".git/objects/0c/61c751b4b52cb588902c51acda80a1cca7857b": "875bd6405b536452f02ed74f7a76c5c4",
".git/objects/0f/bca8096281bfc79e5b7b971bc7a986287d471b": "11f47896bb2c491d8e7ab8284d1d50de",
".git/objects/11/225f1eaa306992a989b8b2e65cdf508a6ae6da": "cd16d409f6bdbb49a8929670c5ab05d3",
".git/objects/17/a65b2720cf9016dc308b2b62be9c7229a5a4ac": "9b443ed02ad1a78c086037177b27156b",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/ee08d814c494951847e21cbc2495950d852f12": "e8007946a5ab3c2778ac01c25614c0b6",
".git/objects/1e/e7dce8b623b624c52cd1a73776ba28d1d639de": "854fa87dcb3c7e0e7542e9ebabd72feb",
".git/objects/23/16bfa3e07afcf11fa483a34819ebb304434c9f": "38acdafc2bfd186f4fa7562323011152",
".git/objects/25/b435ccb693788472b01becdcabd63670f0d33e": "c2917b265cb5c7f6ae4ccbd2b7d4fd80",
".git/objects/27/a574ff788b293fed5ccc5a129320ba518b06fb": "25ef818e50f936a51b6f62c8c7fcdbed",
".git/objects/29/942f8344adc68935218cb871f5eb7da513a4ae": "0b717fb39524da7a64ba0d44286b72a4",
".git/objects/2a/6034cbdccb5797ae84782275a6d90553897f67": "d4ae58cc4dc2d1edfc177e2c28af9a5d",
".git/objects/30/f8196ebc386bb8194fdb09a784a6dfbb9d6ce2": "c1754ff29a300aa1608d7af352fe9c3c",
".git/objects/3e/0c3805504c0ca72c12d63cca3a6ade90518aba": "579bf50833decd06ae7ab0fa406ae38a",
".git/objects/41/12495ae195583f0ccac70a3c1d610645d836cd": "5fe7cc406842727693105856cb1f7ced",
".git/objects/48/1a4584935a1f3b2ea45110c27e51e552489c24": "abe0a35b2710a2d33027bb5fd1e7fa17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/a9b3dbfbdf0e2048d5acaba10619db28986f76": "9f9d51e23c1ffff6113d90f6563db4b7",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/0ffbe465853d6c4735e1ad26b55d095ce9ce0d": "2299352eef9c6c3c07ab403e081ff8af",
".git/objects/58/47d588468e5ab57af7ad0a8da0727fdd68320b": "102a06f386b6a1e02f1b94c722f55fb3",
".git/objects/58/cf8229ef7440f72c58749d107c5e18f99023cb": "a5aa3df6c30271b9ccd3bff4c68b3b58",
".git/objects/5b/9a5dfbb0584890dc34ae6806d06bc5e37a7a68": "2d6e2333054ece1e5418874a59e29a2c",
".git/objects/5d/0ea60304fc0fa37796aafdc7ad9e2649c19789": "328624059ca6a5d7f1be35b87e9e81fb",
".git/objects/5d/9a14e3347f1d7d92212ba1711ff6e82a010973": "f6ee2ced09cddc9aad2d1ef8d4af53e1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/08c6359f6c4630750aaba595771a08e8bcb73b": "40b6b42019ef2120669bc2a5ba18a76e",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/fa31a1a8018cda15fa7dbfea8046623bb1f699": "b5ed1be31a2157c5574f72a1f3e45141",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/3a1a67dee57f77c23b3793eb3e8e9fb9b41246": "ec0a9d4c3f5c6c3d6413b4af7019fc42",
".git/objects/76/94aa49cf6768dc78ab4cad6e59d8ac000cac9e": "bb7cee984f4eb60368aae2cf177dcbce",
".git/objects/78/0cedb97e8b922025d169cebe00e8173b6f4eb8": "4cf5774fb7dec6fd40c43825a3f48928",
".git/objects/7a/3d05f781c0176c14b4b82fb208a29820f0d009": "e6938accb0668ee423627f6a30fd84ed",
".git/objects/7a/e55411f372311348434d0d779514b2473dc227": "c79a8705e370201c3ddc30818ae0cec4",
".git/objects/80/dc0fb92bb706f74a6a7138a298b4136dfaf8a2": "21a6f4b68ebda0ed014ca659b78115c6",
".git/objects/84/68484ec0791df11fd4cb85904f3a8aa7f537dd": "068a616aaef8f8e21316b7f77afae7d7",
".git/objects/88/54490039d9cba2ddb45858029154c15b72529a": "2e601ab479be49cbaf8eee22acb609f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3df9fdd3dd894f0699774cac1fb025b88d72a0": "c6ca5eb61b64be5979a732d5297d5068",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/56cea1eb6ab3e7cf0308ee480e13c70cda154a": "1fc9833c733200779c5b546a3d4760ef",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/d59308249567f6d3919ec75b2d01be1ec7c019": "56c8f2bc67ffb87758ee6e317cb746f6",
".git/objects/8f/3915dbc2b5f26e6370d6bdfae46e0a69555c96": "2c188ed42ea2d18913d8de37c122670c",
".git/objects/92/814c10247738388420e9d87dcaf27bc6f7df29": "3342a5e8002a97d6210ee203535ec202",
".git/objects/97/2b2d2b5519fe3925cd617fd284ee1ee764bc79": "7c8f0e499c42ed3293ebf9420769bd01",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/aa7394d05f63fc6c545249b301dc6973a30103": "41ebe1cb558feb4436aae84f3fb78523",
".git/objects/9f/a8c9d63e59c5cab3b5c34be40f44777d50af92": "25fac02a06bf46bc2810a4129f8aae68",
".git/objects/a6/0c08365ecf950eb9e9371923a956342fae81dc": "33b57fa77608d38f1e15c8224f0afd0c",
".git/objects/ab/d9f5642dde0b80a58723b4180d0d84cc4e4aac": "3498335574280586b60317bc7d178984",
".git/objects/af/3c58d7c8734610b1c57328130ad633cb137fda": "6786dce5be0c669be5c88c090b966c04",
".git/objects/b1/fe4d18021b4108ea1c974b8ed12b5fcf56845a": "68b8c0f056e6ec9831116ffd1affc47f",
".git/objects/b3/9afe43f3d9abd54815f7da1458859c2a81e70c": "c547250c5985c9cf8a4b826ccd0f1bc7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/bd6ec5b0176185e72c033ea14abf376ef747e5": "15b5642ced76f5a9a01d4017413489b7",
".git/objects/bd/7b5182d024aa99be826938b9580ffc0a733cfe": "5b2419b090574e70a80f931a41536aa6",
".git/objects/c1/c7fc3b7cdef059e1e3be35957e55f6c7a62e1c": "6032afffb2d95e714071434175101b98",
".git/objects/c5/b3dc5dd4d289bc7dadb840994f5e8caae48052": "936f5c0432093f2bab0602a10a02927f",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/59955bd36957b360214d913e34e667b8f242db": "4d2ca19b20e41605e5da98a1e451a15e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/df38c66dc01bcbfe8bf5fe0a10a2d4b074d9d8": "1e1d16eab83d12928b44d954a5d44594",
".git/objects/da/526278639224ba3074405a69953225981ef64c": "2ec8e4a38d7bfd8a40c47c06fda34913",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/d7724c7a72093d7b2d2bace9d618729c76fac8": "e6d495fc6c880da752844e398620ab67",
".git/objects/e0/117c0e33f9f10e8cd471f78b9c0fd952dfc1e2": "e52ec82273bcc8a4fe16d1756b9c664d",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/51f396bdca7c95a0aca2bbf8ac6ffaf3d241c6": "e781e7c113b9111ae8e8f9be062054b5",
".git/objects/e2/7307d4be75023ab0acd6b030cee4daec5073b8": "d06427e32883072aa07c265c8d2efcc7",
".git/objects/e7/777b909e3e0bed174151792263f9106be58b45": "ae49cf39f174b899d233366fb2ec51d1",
".git/objects/e7/ad588e7fd317fa5b2887276e51010f794fef01": "9e1331ff6295736208c4cf19dbedcb80",
".git/objects/e8/27c5f5fbde2f0fc9682d451b452de0634c5760": "6d1de74450c02489ede9a264e5baf96d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/0a247582f4a4db0b66a0ae956096045d97cf15": "96b9bd87b4b22e6bebedacc51b17465b",
".git/objects/eb/61d4b1e8272bc21952aff543166a425ca98ee2": "5cceb229e342db9fa09a2c84c24f8adb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/1156233c08d9cfde0d41b8c87b6041a291d1f7": "45bac96b21f8f90309fe6b6e9fb79cc2",
".git/objects/fb/90288ed745f54abc8ddb2d9426d10dcb8ff56e": "7eaa2466e7d02d1a0d57d7dd16ad6f4f",
".git/objects/fd/92d8cb9878806ad1b5919cbdfcf83e5e04c56f": "e13ca606bad6497225b3ba2dcc54b11d",
".git/refs/heads/main": "ec6fbe22761ae49ded1b67e6689384b9",
".git/refs/remotes/origin/main": "ec6fbe22761ae49ded1b67e6689384b9",
"assets/AssetManifest.bin": "a62d01b6aa34f9a89facc567f5155f45",
"assets/AssetManifest.bin.json": "d35bfe08c4b720bb7a2445e27351c739",
"assets/AssetManifest.json": "1462412c7f605e97bbab92d86e6e02ba",
"assets/assets/Heebo/static/Heebo-Bold.ttf": "a5168700fa2d578bc4c59875b0cf8e2f",
"assets/assets/Heebo/static/Heebo-ExtraBold.ttf": "73420a012bd3b24bc69da391357eae51",
"assets/assets/Heebo/static/Heebo-Medium.ttf": "51e6498f70d9eef85290ec64d85d85f5",
"assets/assets/Heebo/static/Heebo-Regular.ttf": "700fba76ccbad3cf283589cafd1b06ae",
"assets/assets/images/app-store.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/images/cinelist/1.png": "024317a17a7986554f80e0a5e57e9e06",
"assets/assets/images/cinelist/2.png": "9813d1cb88bbabfb2ab6d53c8be3fe36",
"assets/assets/images/cinelist/3.png": "7165e62174589027b7dc6371febf2de5",
"assets/assets/images/cinelist/4.png": "26f94b22ffbe4778794d03531b4a78a7",
"assets/assets/images/cinelist.png": "cbcf8cdbf3b628e2ac65ed2da5386e54",
"assets/assets/images/facebook.png": "f9ffe7a2f9b99179d795c5713ea35956",
"assets/assets/images/github.png": "af3d69feba852aac389ccddb8bf375ae",
"assets/assets/images/google-play.png": "5259b9895a279f9efc7fddc44d24e4d0",
"assets/assets/images/linkedin.png": "3f25fde0440cd316a514d72011d95d5f",
"assets/assets/images/ma/2.png": "264d0f7ab7b21d245ef251b9a88a1ab9",
"assets/assets/images/MaAcademy.png": "56a0164469112b7f885ce862cf8a83aa",
"assets/assets/images/mail.png": "59f53637bc14e1df9e01db2eb42212f8",
"assets/assets/images/portfolio.png": "8c2b6f1da6274a3166e8606c7b8ffb61",
"assets/assets/images/sasa.jpg": "a68887a46926b6fc38fb2c0cd483bf7a",
"assets/assets/images/tactitrack/pass_detection.png": "09df871d23609b627e7c3aa9631dab9e",
"assets/assets/images/tactitrack/team_classifer.png": "2ec03a9156e990c56c806e0565fb7362",
"assets/assets/images/tactitrack/zone_controll_mockup.png": "5e7b69933bce5668840c35ce3506e1ee",
"assets/assets/images/TactiTrack.png": "370a5ae0487768f9ed7b664e0c22ab49",
"assets/assets/images/whatsapp.png": "084699860a79bb3aaed4c37da7870d4c",
"assets/FontManifest.json": "298f0735b2b23da2a85f1be86351607d",
"assets/fonts/MaterialIcons-Regular.otf": "2902b56e4b535e6da56a69a50316702d",
"assets/NOTICES": "e64f6b5f5353bfcbcee7b4c1a46be98d",
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
"favicon.png": "213417bf95f7e2c8a3653daf641952a2",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0451063dfcc63983ca7f7c5f67cd1acc",
"icons/favicon.png": "a68887a46926b6fc38fb2c0cd483bf7a",
"icons/Icon-192.png": "6a4999e468361347e3ed1dfab5fc7900",
"icons/Icon-512.png": "f0ad47c07f6c9adba47cf7383b3264b3",
"icons/Icon-maskable-192.png": "6a4999e468361347e3ed1dfab5fc7900",
"icons/Icon-maskable-512.png": "f0ad47c07f6c9adba47cf7383b3264b3",
"index.html": "73dad6599fb5a55e084e255a9f3efb53",
"/": "73dad6599fb5a55e084e255a9f3efb53",
"main.dart.js": "47ddbf27be7d8133ee1ae634d5e17c10",
"manifest.json": "5b370eaf3d5e5978cf7653695b021001",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
