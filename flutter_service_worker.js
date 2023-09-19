'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cc99e4c1f688d437a7b21e3b995255c1",
"index.html": "d2f296692fc11aa1d16e3e156f0f4443",
"/": "d2f296692fc11aa1d16e3e156f0f4443",
"main.dart.js": "a543f00491cac39440c3e440067922a4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd000fee9b4f4fe706ea8cc43b85aa6d",
"assets/AssetManifest.json": "b3b5612434f644cde2a984bb441d1d7e",
"assets/NOTICES": "d6ab3c65620920eb52b017c79cf335b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c007655063a00694aaf18bc6d3279c0c",
"assets/fonts/MaterialIcons-Regular.otf": "b3a73f11977d7eed6e701c20876d793d",
"assets/assets/flags/hn.svg": "9b9bee13c67ab85cd468d1c5fe38ad3e",
"assets/assets/flags/dm.svg": "46f58d408f6a338114dbd063b87f97f7",
"assets/assets/flags/fr.svg": "b1156355de9691d768df19a8a2b44da4",
"assets/assets/flags/dz.svg": "4be984a3b7c813f2937097bdd83801f1",
"assets/assets/flags/ga.svg": "29f203bb2828c1aed048b446c8abb0ae",
"assets/assets/flags/ph.svg": "12f36eed83fdf6fa33bccb7eae18286a",
"assets/assets/flags/ss.svg": "67001d2a8840b34f8407526c30a399d5",
"assets/assets/flags/rw.svg": "7fe5146baf52818fc8f0845a0b36d3da",
"assets/assets/flags/sd.svg": "c466d90ea717a1f99f0ca61fd244b0f3",
"assets/assets/flags/se.svg": "fd663a70a1a92a395078c36bc5d122ad",
"assets/assets/flags/sr.svg": "788f3e2af54fdedc56e32d20777fcf5b",
"assets/assets/flags/eh.svg": "3b662831ee7dd98f8995817929c38fe5",
"assets/assets/flags/gw.svg": "c1e88a916be1c72f688c9e488cdd4516",
"assets/assets/flags/jp.svg": "3e72015c537875435192c3b2d832042e",
"assets/assets/flags/hm.svg": "fe514431ce7922c28d2d322faa28b7f6",
"assets/assets/flags/je.svg": "e0932aed817435f70cf058dd3261ae1c",
"assets/assets/flags/gu.svg": "2284e60e378b2304e722fd86e917d9f3",
"assets/assets/flags/gb.svg": "d3ddd6025a06a78535b0d432d14905bf",
"assets/assets/flags/pk.svg": "c2e1a15939a23c5894eb4af1f20e3e73",
"assets/assets/flags/sg.svg": "5e6ed3f10d1de224079d77fe6f59ce97",
"assets/assets/flags/ru.svg": "0cacf46e6f473fa88781120f370d6107",
"assets/assets/flags/do.svg": "79f8bf8c1a68481e09267f5215ef80ca",
"assets/assets/flags/gt.svg": "656c9899d22b166292448de76509d46c",
"assets/assets/flags/kw.svg": "496fa4662f48d2d7e3bd946177905dc4",
"assets/assets/flags/il.svg": "874270d66e9553b21e76dc1d433ba4a9",
"assets/assets/flags/gg.svg": "98f67a6ff36afda7a5ec44ec59eb5033",
"assets/assets/flags/gp.svg": "fa4cab3e4ee1b865a975e5eb6ab70d03",
"assets/assets/flags/dk.svg": "eb1416e02baeee91a39f721e871caf23",
"assets/assets/flags/sb.svg": "aa819297c44f0a9d29fa4aaf18a1bf32",
"assets/assets/flags/py.svg": "bbc22e414bad33de0d15531e95a2cf3f",
"assets/assets/flags/pn.svg": "c4a2e49ffb6e0dc37c7e4f372b634eb8",
"assets/assets/flags/st.svg": "1f545eb99b323d22b91e51b9e56df808",
"assets/assets/flags/sc.svg": "e6584421fdc8b72dfd9e2a139b71e82a",
"assets/assets/flags/dj.svg": "423c41561146de8c3017bbe35919e0bd",
"assets/assets/flags/gq.svg": "30ed019c10e7044f26649ac9e9a84c8a",
"assets/assets/flags/gf.svg": "38dfa23a36e1e72303eaa3dbbd9db11a",
"assets/assets/flags/kr.svg": "60fde7fc2f6005c1131b87ce63370ffd",
"assets/assets/flags/im.svg": "8c10222d11a27a76e0bb29224c6f743c",
"assets/assets/flags/ke.svg": "dd8a91b8196000643e3383d81c659ecb",
"assets/assets/flags/kg.svg": "1cfa1c79dd521076fb17f8d024e3d19f",
"assets/assets/flags/gb-nir.svg": "43b61feaa71fe3689833cb76851718a7",
"assets/assets/flags/hk.svg": "7428ec1c480645e3654a2729c9f6e07f",
"assets/assets/flags/kp.svg": "9c53429167b92e260e1ec30e1686b93b",
"assets/assets/flags/io.svg": "3ddd1280f6e320712021a1f68ee5ae11",
"assets/assets/flags/gd.svg": "8e690a5aa1fbe3a4fb3797cd327b926e",
"assets/assets/flags/gs.svg": "0ee2d8c9dbe38540ec7006706d31c903",
"assets/assets/flags/sa.svg": "c36d1991b52ce043a0ae18b32a4da5da",
"assets/assets/flags/re.svg": "17909e3784b7d4ef90efeae63ef194b4",
"assets/assets/flags/pm.svg": "1e97e8d76fe2d553eedddc23f833bfe5",
"assets/assets/flags/sv.svg": "1176ea281282d6b053af86809e32d6f9",
"assets/assets/flags/rs.svg": "291d0fb654f2738012dabe35f370a1cd",
"assets/assets/flags/pl.svg": "562edca5bb39d66f4c9238a36295187b",
"assets/assets/flags/gr.svg": "471d733ad436f655210fcb2a9e7d356a",
"assets/assets/flags/ge.svg": "16f859b527e54ef4c757aba84595516f",
"assets/assets/flags/in.svg": "e4ab7bd057c6d49f21b3460a1bf914a9",
"assets/assets/flags/mv.svg": "3c896bfdad2f76fe0945fe43d776a9ab",
"assets/assets/flags/lr.svg": "309ccbd814f8f4ab23dd5a3116f9f2ac",
"assets/assets/flags/ma.svg": "60fbc221d84de9fb44f0d70882a393fc",
"assets/assets/flags/nz.svg": "3241e92770d44bbe8518b3ed7cabab9a",
"assets/assets/flags/au.svg": "503a3a980ccbc651a8acc57b6f6d2dab",
"assets/assets/flags/bn.svg": "1d4e60918c474f844110c46d560233b8",
"assets/assets/flags/by.svg": "f4cbd761094b27fc253729dfbacfceeb",
"assets/assets/flags/tt.svg": "c3647d9bc890d2ebd383b80a3812e52f",
"assets/assets/flags/ug.svg": "be11ef3932f4010356d708d10c60f1e9",
"assets/assets/flags/tc.svg": "d40761f21eebb19082ad74bd401555ee",
"assets/assets/flags/ye.svg": "b5840a84dc1fc44424947f817a83b8ce",
"assets/assets/flags/ck.svg": "960a7b5a2c2322b898007c4611cecfd0",
"assets/assets/flags/bo.svg": "4128202a176b10fa597f1221f8e7e4cd",
"assets/assets/flags/at.svg": "e2634e96c9ad4694d5133cc83e2c6564",
"assets/assets/flags/ls.svg": "c0799ebf1d583d0d38408484bb56ec44",
"assets/assets/flags/mw.svg": "6073ddcffcc7c715883b34f702bef924",
"assets/assets/flags/nl.svg": "d4811c278d659bb33f910685dd356ad8",
"assets/assets/flags/mu.svg": "896330b72092b57179e09d43f831211b",
"assets/assets/flags/ci.svg": "d939dcac611747f6857eb4b92cb14c8e",
"assets/assets/flags/bm.svg": "0fdefae88aaed5d7f18948b45cf3086d",
"assets/assets/flags/bz.svg": "64d617eaf3f2c6f3f0256985b4ede543",
"assets/assets/flags/tw.svg": "8a194685378977299ae31f5e940b2d58",
"assets/assets/flags/us.svg": "ae65659236a7e348402799477237e6fa",
"assets/assets/flags/es-ca.svg": "e9062265c973b4ab42aa70eb66ea8957",
"assets/assets/flags/vi.svg": "4952d5bf33f73b27ccfe260531eb66f3",
"assets/assets/flags/tv.svg": "829fb9d89912457f171d40d33805a83e",
"assets/assets/flags/bl.svg": "38e27b684c0a7f079cc7e1762e5e1ade",
"assets/assets/flags/aw.svg": "47ea7038c8fea471afdd906694068310",
"assets/assets/flags/ch.svg": "9c26f60a63bf575c6b7be3eec11e3043",
"assets/assets/flags/mc.svg": "b4f4b90da30103ef9cb0554e0111ea0d",
"assets/assets/flags/mt.svg": "a816f3a2978c63034949667c78ebf5fd",
"assets/assets/flags/no.svg": "0b41df77e951a30bbfccfd0a3714a1a3",
"assets/assets/flags/lc.svg": "1c3a5554a0d8d1afaaf56164415da91c",
"assets/assets/flags/mg.svg": "67f5922d788548be9d4900bebf2b5e63",
"assets/assets/flags/lt.svg": "c3aeac0dad1dfcc917a721a975ea29dd",
"assets/assets/flags/mp.svg": "c5eb7f233b097ecfc5f78b3959907dcc",
"assets/assets/flags/ad.svg": "d42274826fceb5a1b786df1cfeb5a5ef",
"assets/assets/flags/cl.svg": "8949f9e6d4f88c4f5bc1fe5f3b4e44c4",
"assets/assets/flags/as.svg": "16f433a627bc83a007bba2cbaa686aee",
"assets/assets/flags/bh.svg": "ef135f3ca77838cbb6e329d57d250c9a",
"assets/assets/flags/ua.svg": "a8b13525ee3b82f901196668f4733097",
"assets/assets/flags/tr.svg": "ed6d5f37779af38911b0b7cb2212e30d",
"assets/assets/flags/yt.svg": "f06d254d5978e4b0223fa242514e55e1",
"assets/assets/flags/td.svg": "a0923ddc3c8abed20bfdfbd559c8d7b0",
"assets/assets/flags/bi.svg": "06f36479b44476f25fc935175ac8a596",
"assets/assets/flags/ar.svg": "d205ca1376dbe5ce35b5b926fe739959",
"assets/assets/flags/cm.svg": "5799ad4c126b0a6b1a3f01599f862ad2",
"assets/assets/flags/ae.svg": "9fd1fcbfedb5ace0e6e61a88b3fc3402",
"assets/assets/flags/cz.svg": "2339f3df385beb6667b8fd621e6a53dd",
"assets/assets/flags/mq.svg": "bfeadb02a0e0566b376450d23682c523",
"assets/assets/flags/lu.svg": "c858787cf95b92f694dbe1d296a8a5d4",
"assets/assets/flags/mf.svg": "5b9ff36c7fed044c253162373820d80a",
"assets/assets/flags/lb.svg": "e33a49a9a071a76dd393f2928ce0f808",
"assets/assets/flags/md.svg": "5f734d921b0b2e2fa02cc33367a1d33e",
"assets/assets/flags/ms.svg": "e147bd2bb2aa7f31e3804673c8564340",
"assets/assets/flags/ag.svg": "cce32c739dde31fdbee1e421de18aeac",
"assets/assets/flags/cx.svg": "aa81bb9ef6d3ed6a6d20b6468ee40d02",
"assets/assets/flags/co.svg": "3b252a1a91262604a52801ec3dda088d",
"assets/assets/flags/tf.svg": "4ab43cc9db2814759ac2990c761f60a3",
"assets/assets/flags/vn.svg": "6b3aef51e8b58cf029a85087e87591b5",
"assets/assets/flags/zm.svg": "a9ff495dd331a2364facd4ad5d6891a3",
"assets/assets/flags/gb-sct.svg": "4c2c379f607fe46e0cec999154ea0ba8",
"assets/assets/flags/tg.svg": "025deae88a72695eb60991ab1247714f",
"assets/assets/flags/cn.svg": "02c229de4d98ea1668384d2ed4cc558d",
"assets/assets/flags/bj.svg": "c81e891543509717b02a594b40afa14a",
"assets/assets/flags/aq.svg": "65afe1f1ffb9d9a23d25d2327ba2c3d3",
"assets/assets/flags/cy.svg": "d069616cbc4fb181cdadc171a5038ff2",
"assets/assets/flags/af.svg": "008dc3229529b5e6be2aa03ce93fc03e",
"assets/assets/flags/lv.svg": "8b293d984cea7db72e62598083dc759d",
"assets/assets/flags/om.svg": "1798270ba5e7dc130458959dccc26b22",
"assets/assets/flags/mr.svg": "a46829f17f8f3c4c5a5929be8e3fc599",
"assets/assets/flags/ni.svg": "7b131ab3ceaf55696b688d2617f21f54",
"assets/assets/flags/la.svg": "0f124ae33af5a9291262592979c90f55",
"assets/assets/flags/me.svg": "76c434a613ae0b6e08fc3d2e8c244e52",
"assets/assets/flags/mh.svg": "6d60cee3ee8d6bee9a372599dea4a426",
"assets/assets/flags/gb-wls.svg": "2d554424b763bed9142fba7aaf41d8fc",
"assets/assets/flags/cc.svg": "2da4bb974f777f45e0398ac1ba44e507",
"assets/assets/flags/bg.svg": "3d762564b2be000f52ca9038e8f42ad4",
"assets/assets/flags/tj.svg": "a8ed5244d61deb197fad851e52e6f10b",
"assets/assets/flags/un.svg": "bdaf37f920eb89f19bf840be77b1f359",
"assets/assets/flags/vu.svg": "859836e7f7e23c3e620dc34e4bf47c79",
"assets/assets/flags/wf.svg": "e3ac728c6286182ecee6047ba2d84627",
"assets/assets/flags/uy.svg": "79b02850081e27b3ba209e6ae60ad50f",
"assets/assets/flags/za.svg": "14e7052257d9914b613fc992186d2e90",
"assets/assets/flags/zw.svg": "6ac3949a90f1620a287b06e2b4cb3bc2",
"assets/assets/flags/vc.svg": "4ac5124fbf60fcff6808515904a79f04",
"assets/assets/flags/tk.svg": "1959d9de338fea49559ebcdbc11d7185",
"assets/assets/flags/bf.svg": "9a958401fd126a3c08686ece9477cea3",
"assets/assets/flags/bq.svg": "b551016fbdf64b9d22f1c7b34a6a3a8d",
"assets/assets/flags/cu.svg": "750c91b200d29892cf10f9887253105f",
"assets/assets/flags/ne.svg": "b7369ec74cd2a2ccf698ab0416ba2711",
"assets/assets/flags/nr.svg": "d16edc69065bf2bd0b0ba47650201d6b",
"assets/assets/flags/mk.svg": "ed091b887cafb2adbf04a411d7ac40fa",
"assets/assets/flags/np.svg": "b66578a5c732da35e2c8af86e46ff93b",
"assets/assets/flags/ng.svg": "992459a3d0f22849b493a540e1564bb0",
"assets/assets/flags/bs.svg": "9f8a4eae81ab5bc495dd7fa4f7b26d87",
"assets/assets/flags/cw.svg": "f1b3043c88d52ecf9222b5987791bbac",
"assets/assets/flags/bd.svg": "5102bab03db6e13a165043eedab1e332",
"assets/assets/flags/um.svg": "8754eddfe66cfeebda8977e08505dfdb",
"assets/assets/flags/va.svg": "21913d789a3d4b70ce0a72e2ceeea239",
"assets/assets/flags/uz.svg": "eb1e00b870d7f0784288d76eb3bfc1d5",
"assets/assets/flags/xk.svg": "62bc9bcf96e7abb6e21278b2e9714817",
"assets/assets/flags/ws.svg": "405a2c5f036343f54f0e46ab054e7cf8",
"assets/assets/flags/th.svg": "76fca72f6d180d3f14a55653b8937b5e",
"assets/assets/flags/ca.svg": "c976442e32a435a0ea72b42d40dbe8ef",
"assets/assets/flags/be.svg": "27d8ca49197f90010475d2b3646ce6b5",
"assets/assets/flags/cv.svg": "f9922e019e929da267a67ee784bdde66",
"assets/assets/flags/ai.svg": "c2f29c4d57cfcba3c9b2374b2c7e461f",
"assets/assets/flags/br.svg": "87032851c3532c9dd64f20f4bee155a9",
"assets/assets/flags/ly.svg": "d089645e2ba9f431431b479cc902bf43",
"assets/assets/flags/nf.svg": "99af5a94b011d565f7ab92338a3a8186",
"assets/assets/flags/my.svg": "e6739f404c969d6225b48df00169ca8f",
"assets/assets/flags/mn.svg": "9ebe47ebe8928cd80ea971f6cc7a2760",
"assets/assets/flags/nu.svg": "433deb3d047d08459797f7a9da38685f",
"assets/assets/flags/az.svg": "451284cedf7277f87440e014c3c11557",
"assets/assets/flags/ba.svg": "3223166179b08490c6c2291ace1894f0",
"assets/assets/flags/bv.svg": "78bef9106e11eade7698e39f6ed831c7",
"assets/assets/flags/am.svg": "06509258e6113e2e0e54592337ac8171",
"assets/assets/flags/cr.svg": "7b4ebd50f5274e5bfca82408ca79c32d",
"assets/assets/flags/tl.svg": "3c1ccf1158d75af368e003eeac4716c7",
"assets/assets/flags/tm.svg": "b13d1440e1d8f4c55361656fd3191952",
"assets/assets/flags/tz.svg": "88c89454adfe247406b430a46c965da8",
"assets/assets/flags/ve.svg": "b2cd5a9a011fd43f115a2c5e2c9f91e5",
"assets/assets/flags/al.svg": "4eb491e7412fcc678a29741fdc941eba",
"assets/assets/flags/bw.svg": "d1585fdf351c0bcd56a04ab460d51b3c",
"assets/assets/flags/cd.svg": "cd346cdc7caa416803025986e843a600",
"assets/assets/flags/lk.svg": "497ee5b9544ffc29720476b7085f7503",
"assets/assets/flags/mo.svg": "e1178856d7fef5a8dcd53af9f9836ab7",
"assets/assets/flags/mx.svg": "8ee3aa6a7feaf34c5cc806f645cfd3c6",
"assets/assets/flags/nc.svg": "b8c9f5e4fa65dc17c5f07773616fa3cb",
"assets/assets/flags/na.svg": "bb49a4035c384be9926bac6004bea21f",
"assets/assets/flags/mz.svg": "ef4657da4e39ea91de728d93ce59d7c9",
"assets/assets/flags/li.svg": "fb5437d371f4dc6261e9f4e5bd21628d",
"assets/assets/flags/mm.svg": "92e9f832a28fd293035e21d9b6983790",
"assets/assets/flags/cf.svg": "2171101e459db58cc9311ec6a0926648",
"assets/assets/flags/bb.svg": "9873885f352c415ad25c32ecf69e5cd3",
"assets/assets/flags/vg.svg": "b37358a1a76ab385e4ea28f3732b7f57",
"assets/assets/flags/to.svg": "79354e72ad0559ef82e28d0f2e88033f",
"assets/assets/flags/tn.svg": "50cd91018d742d2f5c31a158d417ea87",
"assets/assets/flags/ao.svg": "8b6f2ec29629876f9c00839932ded057",
"assets/assets/flags/bt.svg": "65b20c56edb0ae6f6523f7242256bf25",
"assets/assets/flags/ax.svg": "c26f83744d3df6899632e575d390681a",
"assets/assets/flags/cg.svg": "4396b867b33acac643e6d978fb99f1ac",
"assets/assets/flags/ml.svg": "e6f097f93a69b28225c43e25fdcaf709",
"assets/assets/flags/jo.svg": "9e2f2b3ac5784152799cde822b9ebc29",
"assets/assets/flags/it.svg": "8d15de04f5f6e8e89cab4e5eb237f607",
"assets/assets/flags/gh.svg": "caedb9129bf6bd63ff4081a0ba91e113",
"assets/assets/flags/sm.svg": "3b1c9fb5c651a0bda66739b990a1456d",
"assets/assets/flags/pa.svg": "d0787677f0d7c9cdaa8f6acca3f19245",
"assets/assets/flags/sz.svg": "cfb8269f38d55f7f388bca2ae6d18fb4",
"assets/assets/flags/gb-eng.svg": "14167f77f128b0f57a6263843017fc0f",
"assets/assets/flags/es-ga.svg": "2618e21f1cd5dcbd95d7b119f7b4e33a",
"assets/assets/flags/pw.svg": "20a1d020151e19375915c509633d5018",
"assets/assets/flags/sl.svg": "ddbd1d9b113b2688102f56c63a431475",
"assets/assets/flags/de.svg": "3e726c2b6a59e6e4543c0a1534d93796",
"assets/assets/flags/gi.svg": "dce455a731d707ad9f6f4d4b60bb78fa",
"assets/assets/flags/fm.svg": "59c5190c55c637cc6786bcab140eb22c",
"assets/assets/flags/kh.svg": "5a13865d2bcaa01d31483c08c8903ea7",
"assets/assets/flags/et.svg": "2ebb0d3d6e63baf78a33bca7e1ae9326",
"assets/assets/flags/fo.svg": "037e466d03f81cd46e76b58aa73fe492",
"assets/assets/flags/ec.svg": "5d6fdbf808b19221f220ae2e0e991017",
"assets/assets/flags/sn.svg": "5b654e1a7246e45c6577b66c7b935620",
"assets/assets/flags/sy.svg": "64f0d2d7a590e22c8d0c415ba7d729af",
"assets/assets/flags/sx.svg": "522d898c19396a45caa51ed0f0f2543e",
"assets/assets/flags/pt.svg": "b908edaecfb2ef51ac70b6bf7457ef2c",
"assets/assets/flags/so.svg": "f91fb92c0ca6934e1e008f8f97e58c63",
"assets/assets/flags/eu.svg": "ee7f4712ac4553621d85503cb9a130e5",
"assets/assets/flags/jm.svg": "67f96b2f0df34ce53d7651ade04d1e0b",
"assets/assets/flags/hr.svg": "4680d6323b39f2d7bd88116f757d8838",
"assets/assets/flags/ki.svg": "db7e40f60e21ad4b6b6465409ce745b3",
"assets/assets/flags/kz.svg": "740ef4bf1d15794bfbeb7a4ee804a760",
"assets/assets/flags/ie.svg": "c68ff961baf04c04f9beac2c32cd2458",
"assets/assets/flags/km.svg": "9b06043d7f9a227bc63532af67999125",
"assets/assets/flags/ir.svg": "23e0f96c3fa45df393a3c1d184b2df34",
"assets/assets/flags/gy.svg": "79fcf270400edca30d7790872057d26c",
"assets/assets/flags/gn.svg": "36a3e9a3dd82736bfcf23f28bb3ebc10",
"assets/assets/flags/fj.svg": "60620e850f30b0da0d89bc25f3d69958",
"assets/assets/flags/pg.svg": "68e1ce3359df0808db9cc34dcb488c4b",
"assets/assets/flags/sk.svg": "b84444bf8d98e48c8b0055e54071d918",
"assets/assets/flags/ro.svg": "625aca9e928c0eb9f463099945b9b115",
"assets/assets/flags/sj.svg": "ae547dbec390990657f9d8acd33fbea4",
"assets/assets/flags/pf.svg": "bab3b7a56aa5cd5f44235c47ea55f5e9",
"assets/assets/flags/fk.svg": "519e3de544b46b3524a5a2bbbc383625",
"assets/assets/flags/eg.svg": "6b83ab95bd23daca2408f78d9381af8c",
"assets/assets/flags/is.svg": "2ce20c50765b6cccf87ee4b269d8c507",
"assets/assets/flags/id.svg": "17b996767ee0373a262c32a16248a3b6",
"assets/assets/flags/ky.svg": "5814c5a94343cb013715ab05d3eac07b",
"assets/assets/flags/iq.svg": "be9919971db8b464b1baf82a3873d1ab",
"assets/assets/flags/kn.svg": "bde74c6da4f2cff6fe3ae84b510b1857",
"assets/assets/flags/hu.svg": "0d7409f88bca8325938e46e3ef672716",
"assets/assets/flags/ee.svg": "6088c9ceb092913b54d7235ee2e56f2c",
"assets/assets/flags/er.svg": "e5e5e397d9e7e40f3b3078e291e3b396",
"assets/assets/flags/fi.svg": "2649533e1d44a2ef75d5679ef6839b9e",
"assets/assets/flags/gm.svg": "50fe2799b099599b89f80b4d25376134",
"assets/assets/flags/sh.svg": "6560d76bf10093362d933d31d620b17f",
"assets/assets/flags/ps.svg": "42f2391e39ad07037687596ba3fbab75",
"assets/assets/flags/pr.svg": "0811a0517cf38bb44f513ab15b7532de",
"assets/assets/flags/si.svg": "31fbdc5b5842cfa094afed00d9baf083",
"assets/assets/flags/pe.svg": "ea95116f76c82964116d1575f7b8376a",
"assets/assets/flags/qa.svg": "b314986b75f2a81f557544f73e2cd203",
"assets/assets/flags/gl.svg": "2490aa08f40830bae35da50d6e38dbd5",
"assets/assets/flags/es.svg": "50623e6a761b392b5381ce35e8a77f99",
"assets/assets/flags/ht.svg": "fb289ca05aec82435254286e5410df58",
"assets/assets/map.png": "c5dc0e424455641b471ebedee237c910",
"assets/assets/svgs/market_report.svg": "07cd43cf322e0e61f3f582e0156178ae",
"assets/assets/svgs/approved.svg": "77e9eef8eb6cd65379d76ac0e1e30c1b",
"assets/assets/svgs/lf.svg": "7ee89909363d7db93069c9dda08b78f5",
"assets/assets/svgs/industrial.svg": "b61db05abbd71fa06454e24bebb4aeee",
"assets/assets/svgs/supply_chain.svg": "010832505aedbb23a0e9fb2821e210b9",
"assets/assets/svgs/plantation.svg": "508f0787e8531feba09cab10727a03f5",
"assets/assets/svgs/draft.svg": "aa100ce3aa110d75e84bd50b66f5a497",
"assets/assets/svgs/report.svg": "ae7f20af989a5dae9d2f398c4371a421",
"assets/assets/svgs/nurseries.svg": "6d86cd16d63d44f6d96e8bad452cfb74",
"assets/assets/svgs/training.svg": "04794ae97d156867185aa438ba7231bc",
"assets/assets/svgs/submit.svg": "a49b909cbce899d8dc262c7506b8f5a6",
"assets/assets/register.gif": "2a63b37aecfa424d9653c6fc815d96a4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
