'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4c6f9758bde215c556ab130a45d38c9d",
".git/config": "8451fe9256d0de3bd37357634ebcea1b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b8bb3574faa79efec769d2f4921bbef9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "eb5a34f66b81bd02f05d82f3500f2ba2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "809f64b2f5732298362f2236f3f033b0",
".git/logs/refs/heads/main": "981ef48a964839df05bf27eb88c56f0a",
".git/logs/refs/remotes/origin/main": "d4d5bf6276b6b7f8bd357499d6e287fc",
".git/objects/03/3f91be54b71a44e10aca9f33c439ea66a8f2e9": "7ab1f33e50c40a32b31d8e878e12168d",
".git/objects/03/572350b343e45fb58887c3efe5c4d3cb1432ad": "ee73ba0c21b7f4a8b8405c61aa9859aa",
".git/objects/04/5a8910a86438d479807dc5d457d9c6a1256f36": "197e9c39cf047adf1899896bc78048cb",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/0ea4774926f80e7a7d3a4ebdca4f0b9a75d58b": "b238dc189e5e0c2b56bec1512160dad2",
".git/objects/0a/4554d3ed60fce5b7b0b072cda925341fdbbddc": "6152c3c66e33baa76090d0ad65c7a9db",
".git/objects/11/3f53fed42371056a88db7814bbbc2d2de046c7": "01bb8a237e06fce4adfb04471aa74dde",
".git/objects/11/545fcf73d79dc9e300444a5ce4fb89ce9e761c": "3fe27d63a07bd5dec358f4399cfd23d0",
".git/objects/16/00caf14e30de0259ac21847fecf891fc47f9de": "08e520def41ffa328df9ca114b686a55",
".git/objects/16/02fed1908db4a64c83b15c18b3c8ffaa4856be": "60d2f88341e09843660076d062345665",
".git/objects/17/8f156f875076bb49e8f3d0122f684585703e5f": "9fff8d77d21a3e62cf3b48b0192c2ebc",
".git/objects/1e/46a94a4788aa54b78858f01ef8ca55484e030e": "6c33e80a093567686fae25f96e83c493",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/64eb9c7c0de13f0364186cc8ff06743f15923a": "b47d041e9c694c019c8d3cc4f5de4f4b",
".git/objects/26/59937bfae3fdd458b365e1995cd5bf1f2b9524": "8723c24892877ef553760a11a8470d2f",
".git/objects/28/fa9580204fd790cac747c8397de77fa247041c": "bc06e4f5e60929c1c6733f5f87bc0716",
".git/objects/2e/4c180347198923ea0f1e8c3092f292b1c1fbd8": "cfacbde19a75ed2257098aa773fe2692",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/b9184824d500ebb99636641c95db4fb1f6888b": "167cabf5262e15f79900abfe0e1a3a12",
".git/objects/37/8668faa87f27e36e92d996f9eedc56d71cfd77": "62680d2f29de73edfdac9250938fbd23",
".git/objects/38/27cb3634b1384eebec9fb0d30d3a976339c42d": "10c8a1dfaeec5b8d89702fc11d2478b1",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/edb7bffca7d4742b453b15ac8cc79030269d66": "15719365f42a94ff52a490e4ffe6d656",
".git/objects/3b/e1dee676cdcb41d788a6aa659f8167129192b3": "3576485dffa4556d74084f6d5cdd5c03",
".git/objects/3d/3c50f623462af00ef23908e9c69b65af3f8764": "e5ccdd668ea1b92787646825409deb1a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/1b87bc0213a55fa41de189cea80700980dc511": "f36d26ac98c5682f01ab2762ca88b643",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/c07c99ac68cc1e9634f0e262999f6e11033fa2": "a4482e3039181256451060c812684a58",
".git/objects/46/cba25f54f50d868819b2cbc69af523532897d1": "93b84073af59dc6fd22028c750bbf10d",
".git/objects/47/06d5a3f056f005085d491c736811e3e647a753": "4d8babbd33cf7fff06b2d9038cbf62ca",
".git/objects/47/18a5c185b99299d243e1f62b1f4a7f914f757f": "242fcf64ac858e53b52c330c47228559",
".git/objects/48/bb7d3db44300e0dc6f9fdd36051e12d9b2366e": "0ff04a6a3316b1f708032975d3cde0d4",
".git/objects/49/b7c1207d13d1c8bbee6a996e6ef47cffc385f5": "0a20e49defb21dd63aa436fab359f7f4",
".git/objects/4b/70f3079ead4a5c44ae0dbb0310f222472fd120": "cf9a2bd7a077c2f1fe31a15d2cfd9538",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/62ba6823deaee8fc4a3ef54eec8d4ecd5d2cff": "6b7d9618db36e1da29f26add0cb1c217",
".git/objects/4d/c7baae99abcc1687ffacc8662b65000fbbda23": "31c345c09d9e7f8aec8eb4d941c39c53",
".git/objects/52/427dd30dca1b130ce1473d3f7f932052bafac7": "2b0641be438cdc4dc7c2a05ddb206539",
".git/objects/56/a52db5fda8f4cd32f1ff3b40ba0d33a54063c2": "304dfe11117e1d9f434582f4ca34fd73",
".git/objects/57/db3ecf5300664a68f5a4411d39aebcb8758bf9": "6e9cf80996034baf4d05b98a2816eccd",
".git/objects/5a/00db4b92d3bacaa6cc9c9b59ea5dcfe78e12bd": "9b540e642d37390c1282f766905658e0",
".git/objects/5b/bfe56972726cf901de9f1d538f6a9f2b49eea2": "bdeb28135fb17d2d370df43873b81537",
".git/objects/5d/0c71f52c15f760d19b54c838373f3b872bfb71": "fe607db1799e65b96a80e9a2a0c6883c",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/66/34d5f9729959665edaf97d40057fbcfcb5499a": "bc2792889fbbd2b712694bd8a78cefb3",
".git/objects/68/55e43f6d77ab0e69cd35ec743966312e1cecd8": "ebbd29439390023f6ad85c2f569040a8",
".git/objects/6a/365f37f646aab7899582677b775261427c0831": "f60d947b135aa542b9901f0f5dd4ac14",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/1f84e253322c759b2a579f079faaf56d96a311": "a9a017a67750eb34e050b75a239dc624",
".git/objects/78/173a1fae304b0082fbf6693b0fe19d5339f349": "646535bc5ae7cbfc14ec4f1e7eb44c3d",
".git/objects/78/a9705d4c34d710b2d8406446d222aeb0436cd4": "2041f41b36f8249e3bc02571013fabc3",
".git/objects/7a/4c4370dc185a42db7bf5b0d64f2a4bec61ec1d": "4a3145540860bc3e72558b4a371f74a4",
".git/objects/7e/92a327619126a25f8df41089d469b7883b24ae": "68fc117934f9d1a55461f86ed4df9075",
".git/objects/80/16920a8434d2fdacd1d38fe2a3df9682a77448": "ab8a5dabdfa94ffbb7796ad813cf96a6",
".git/objects/82/782dc5867cb7b32c105606a1a72466c1711c20": "bedd6f4ecea7b8569c8cf010220bb984",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/45a92c98089093561fb0e7d77ead033b76990e": "b2eb4b10d8b8c783a0e7698d37441ca8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/e62057004f28263794a35cab5485418ef4f4ce": "dfefc5b31a21e516615b47ffd276f505",
".git/objects/89/838ffeae643ff689091beb7dec5d96c8207771": "376e8100dd6399c3a7e8aad03e8915bf",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/f8cb0e5ddc755d1c57f64d11ecc7793f6dfa0d": "be7f455805e41ed5ce16a6eca447461c",
".git/objects/92/79380830324d94a313c55e1cd7dc161bee20ea": "20688bd094cf962053c2362394f6eeaa",
".git/objects/92/884a7a05d6ab85fcb18c349dfcf4d3187d20c3": "90586d1eb4e4d4ffb1c47793dc7a58af",
".git/objects/96/4d78b59f075a0bfa6e0807987096bc1b3f3cb2": "2aa8eddc87d13fd090c82c68dbc9dcef",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/7a5cd144ab780b2cda44e247b134c1cae73f28": "d74cf13b6b39177d0fd362fb997d867a",
".git/objects/9f/1bc2cddf9e83adf8831357b9faacf2ca411c1a": "e67ba735c40b38e9dab4ef732c1dd2aa",
".git/objects/a1/410c5ff152a8413d78f4e1ddf352a60780af5f": "a67bc6d0cdf58648e23aa3a0928b34c8",
".git/objects/a3/413f2358389a2abfb491c665fc53ed25a381be": "862a9ef0235ca46cfca7233f1d0908fd",
".git/objects/af/b64e790556bb68ac9a18e599abe60040d237f7": "bc842019042d2bb7fa8181b86ee2fa39",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/a753a78400626102d7dd5ee98f3c9b84c52886": "105f378ded30e236f367b4598c8240eb",
".git/objects/b6/7bfe1841a39761e97d75cb26ff15e447be21ab": "2adfe47803d24a36e05a49a24b89809f",
".git/objects/b9/20ce75055685946d8b1f947d838d98f1cfadf2": "cce559562c182e849e28faac4d3375c6",
".git/objects/b9/b0579949504ea58b6391151a2d6dc05f6547fa": "dd72dee34cb138d8d2b92209bf89a9a0",
".git/objects/b9/b2ae233992e4c69db09eb06ea14a9010591fde": "ff189a97f756a8f02783576313117335",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/71dfdad749f5e1930e954b59d0f18a1a45a67e": "d9e430b6256815858e02126de8b85f90",
".git/objects/ba/8560596ed1499e5896013293a1978b63e839da": "2f8b79dd1996f53d8b00a844a3b78b46",
".git/objects/bd/7d5351d95a0ec179c1e3d634ac76a342d6f190": "a51e32e14ab79cad8bc7fdaa4898ca99",
".git/objects/ca/dc89ea5d31603331e659614ecd7dd06901cd27": "c747935ba40300e958e619914d1fcac7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/7aa59e64052d1090390fcd6ed71be2f730dc20": "2ea7feffe9af0b1d3bf6b0db85f25de2",
".git/objects/d3/fb982fa7b6979030cecd2deb31e336add95368": "b5d9f6a532f6858e340a14a826223406",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d9/d24ebcddc1e57a1c8e2b8796c2dfca326bb012": "8495af7b5501a64450258c855d790833",
".git/objects/d9/f028ab27a46ec2c69ed269ac6699e405ace336": "76c3c907a23d23747d9d01baef08ef72",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/09a7fa618634225fcd937a30e2922fac4e1e60": "458494b4dc3a4467fe90c0404cad3163",
".git/objects/e1/77f115ef23412021a76f6994846b7308d885f5": "cd1b5b83fddd34f3ce523f0b00b5a951",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e8/49a01d043ddc2ea4d2fa8113dc1a039878fa41": "46d752df55209e6f7da46a409ee11600",
".git/objects/e9/9a7ef57998eefaff9a0bff6f8fb2732c917f3c": "8d989a3a9c78c58c761c77283afe8889",
".git/objects/eb/49de0ed548b8e82fcb84e9ef0dceedb5efca29": "a57463a6ad301af15c91e8c59addd6d5",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ebec4b659507a6c169d1b22d6987b61f418db4": "c1c673815fe8ddfcbbf36403025d2bce",
".git/objects/f3/b65e8558b6af90f9943d93dd4c81672bbd74c3": "8e54cb41f9498fb0330a22268a03b855",
".git/objects/fa/18052936847b3bc5904fc3d6ada960566a761d": "4982d32bed2ecd9a4134b94b79c72648",
".git/refs/heads/main": "14dfd692988e839f82727055c3cf734d",
".git/refs/remotes/origin/main": "db524b8a8345b122d39b3b6df0bb1c6e",
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
"flutter_bootstrap.js": "fa0c0941ace14114c3f1d478a1ba8b79",
"icons/Icon-192.png": "70f90ef4415e472f4031fc35d56691ee",
"icons/Icon-512.png": "4b2cd14b6119188b5519a47b304defa1",
"icons/Icon-maskable-192.png": "70f90ef4415e472f4031fc35d56691ee",
"icons/Icon-maskable-512.png": "4b2cd14b6119188b5519a47b304defa1",
"index.html": "7d759998272a5042df0b3dabf9120619",
"/": "7d759998272a5042df0b3dabf9120619",
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
