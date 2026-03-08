'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "166d77ac1b46a1ec38aa35ab7e628ab5",
".git/config": "0e23721f82801d13924a15547f9e9b61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "abbced2690c420a26767fbef9e6e5ad5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3f03da0ac3bef957c84d84134b2ebce",
".git/logs/refs/heads/main": "e09c9e94d438ddbfa0b13c1ac86fe181",
".git/logs/refs/remotes/origin/main": "71946b7902c54134f7a0cd6fa35a549e",
".git/objects/02/6a31da68565a1cfb557f6fba307a35dfef0fe2": "07e3cd27cd6aa50f849290b637596c8f",
".git/objects/03/f05b6e1e83cef71e6cc1cd671ec3958a7332df": "f18b67141763c62c5ade3a0900df688e",
".git/objects/07/0ed267d2799cfdf9b104fc849877a4b853e11c": "37d1652a4842c18ea7439868e74de81c",
".git/objects/07/e2cc22796fa824b9f1c22b2d77e432d33fd27b": "ed152aa98e36cc706bb2d77fc328b49d",
".git/objects/08/0016caf1d6022375693a865c7593e82c7f8edb": "ce1c512b9bd092ad04aaaec1097bf6ab",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/797237890ec14e79c6bc4693797d771d54c53a": "87ec256730e4a92ac6138b7788af10a6",
".git/objects/0a/f817a892873ddbb00c3edfa0ae6529ca036b16": "a86fedef593e3c7ee600222cf0a0a615",
".git/objects/0d/1396bfff6ae84c3c7c91a4fd12828bf2037f0c": "db71f5b000d97c324d81c99053885462",
".git/objects/0d/69b8b969912dbe4450cf2c40ff1996d7de85ae": "446eaebfb1f5739af30dab4eb9921c4a",
".git/objects/0e/3c5476fe8f2c36a8d1311a73c21228f4fcf732": "a5da08a02419a27d1518f64d00e88752",
".git/objects/0e/bac61570e9812ff3be9eaa40ddf1088078282e": "fced8931694735e6932e5642bcb2260a",
".git/objects/12/0605965cc5f27e1ab9d0a5fddf93028a5a9688": "e649b2e728038bdb0b05944731ba83c1",
".git/objects/14/81882861f724559e96529d47e20380fd28b6b1": "7ebccb24faeab8ecf3b6b9dce8699a8c",
".git/objects/14/aa4b3fab72ee5150f59fa3c7915d9d989965a3": "a0b1b94bb5580d4a12d8eb659faf0108",
".git/objects/16/1c3fdc02894a9b004273605f757ee2e79a6c10": "cccfc1b771a20210fbd033f66e50f408",
".git/objects/16/a5332948e84f753a70040fcd113e86243e92f3": "fe8c1d14c4d518af7424270aa304f358",
".git/objects/17/db5dfce42887af2c38fcc066b97d439b6e2aea": "f8d12b7e32a9f2c837185677c8965cff",
".git/objects/18/390388318c7150a97ab757b85c35e722f26fa3": "068f248ab94847304d27f1570a069f1d",
".git/objects/18/d656939ddb0d5526ea31742850a5eed09929a5": "17fd43f217ff53137737cf36e016aac8",
".git/objects/19/6a99ef80c3b2c04e91c88d095aff9ee4d30b87": "e94b3bb32917fa6653215972e49a9c4a",
".git/objects/1a/8cc0660709a123e1643969b2e626c972e559ae": "08219cb36174c3d908492718ffa68b30",
".git/objects/1b/e3a7b129beef7d669abdf7e55b30aba7198c16": "2c31ace5b9ca1e1a61e6b119d8cd2057",
".git/objects/20/2b9d856d9569a61501062618e3af08b5c3ba13": "49601d4add7109cd334a6f4aedde7a64",
".git/objects/21/dff8ab2ffdc37790138d4b643fb2576ebb034d": "95824f51dd72cc0c92daa9fe4e0440e5",
".git/objects/23/e37a95a917496fafacb750284e5c07c4132796": "c34ce8283de8644b7756429ef22b8f1e",
".git/objects/25/1942c36879ceb851a6ee172150f1038db72c34": "c69e59f1b18444769168df6883381fe1",
".git/objects/25/c47d91810587756c9c57df42b14959206272cd": "efeee84b108f72091c2f71e072f4df0f",
".git/objects/27/b40e075ca32f3b6aaa3343c79731832a8d827d": "6edd31324388a3f27121434f071fdd6f",
".git/objects/28/0686ac26fe8daef9ed69925998f2e241462e0c": "3e6f4d461ae51eb144743bdc3c45dbe5",
".git/objects/2a/c56f454c89574c3f5157fd55c00696a4680c28": "89afe9477cddf7ae2641a1cd42b04d81",
".git/objects/2b/a9b56074fc164dcaaf46a2c95d85fa0c61a96b": "3f9093dbb7b6ebfc4d43fa233503ba90",
".git/objects/2c/886b53d6ec62369f7f0bdc1807745b5c870892": "34f568f2e838b0fe05ecf3cd84aebbf0",
".git/objects/2c/aa80d21d22db7388efeb56fceca7d6486e080f": "30df1c387f10b2f7c132b95472578460",
".git/objects/2d/d4f4f061f7324f512d58823417297fe113c676": "0ad6179206049700d7708b1ab6cef482",
".git/objects/2e/6c26c12e78713127d6c63900ac51396168a951": "793102652d8a6658b82245bdd464aa30",
".git/objects/2f/0ada215132671f6297d50f8453d76f333a4bc2": "07b3d0527dfc4a322a22b1aaeecb8f5a",
".git/objects/30/f705d6b51fe849020b968d2988c96eabd2145e": "79de1577888bc8d4c83180403a7f91f8",
".git/objects/31/041ed54d0ea3c786df70e623caf3964a396f2a": "386c10e2d66957b9506d9f0f3fa900ec",
".git/objects/31/3043a7e5ca37ef4bd271972913cda3b834268b": "b5463d8021590367259b760317701ca1",
".git/objects/32/752613bdd85c449245ca35edfc7a1f3a5b7513": "631ba8f0bf84622eee858e4d59a6a120",
".git/objects/36/800a8dfbf613b8255475fdd6f981180735dbe4": "72f7dda5a0016e22f53fc004b312055e",
".git/objects/36/a5f9e3e0ff5e2f50e34653a666003c52095818": "8de8d2821a175f37bbe3202f80d7ffac",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/711cae1781f563c60eccf000f340e5508cb771": "45fde54d95d655a39f9b1b9d739c0968",
".git/objects/3d/781c1e34155eaf3521ec4cb88c52aceed01109": "c36410219b66632276e59c2830e671ad",
".git/objects/3d/fe4a4d131226f0bc9189cf701e5163f0b55ef9": "cbcc593b0ae2ac33452a1edaa8e71b65",
".git/objects/3e/f34020ad619c78c7ad55b9a8667c5ca2fe6d60": "f35bb07f15163d6dc7e5ccc804a90bbb",
".git/objects/3f/54d6a48bbdedf5076640af5d6a6453a2b93426": "b643415b13cf41f383afd36ab1d9333c",
".git/objects/3f/f43903260dce9211b84d8a74d6e94ffbbb3334": "0fd944a396036697b66cfe2dd4cd82d1",
".git/objects/41/012759cff631d6675eeccb8ae5413a4a60ca4a": "6ce4ff11bf6494e08e7720a1e13f5e4f",
".git/objects/41/1c646a5854de21e6f49be4cbdeaffd4a28f20e": "2e6e0767cb78c4cba3de5c9b55323eb4",
".git/objects/42/01cbd6a3c1eb8ab9d062af4e5ef7fdb9fbbe8b": "bef5acb588abf7a50eea84708f37d986",
".git/objects/42/a493e89b21163380038b79299898dcfbeb0fa9": "6e936ac0ee6e8f3e6d05f089b1df2629",
".git/objects/42/af3aa7adb9480e6257c26bf47da0aa18ed4a93": "9d1341a88fa448a54e39fcd8f60c160f",
".git/objects/43/da7b1cb022d9f600aee9d2aab9c747e545636d": "787ae793287e1684cdd3cfc156114b00",
".git/objects/44/0c7eb8162523b96f6462d49e2c07148ebb40d9": "9eab83b63431cbb756505ed619d68a59",
".git/objects/44/5dcc202501475dd1cf5d1285cdadafb1a76075": "755e1752cfbc9beb50278327aa9b6629",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/eb810a83e70da21b4cf090adf17d8ebbc56b1c": "b267af60de4d93887a77e8611acd49e9",
".git/objects/47/4169c270adc0bdac353bc896aa4c08255b8b18": "decc3682d4a50e457dfc829a8cec4009",
".git/objects/48/871a82fc2dfddb5fbe9cff7b18ca5d18df70d3": "20eea833fd0c2b42fbf73c93ff061b1e",
".git/objects/4a/625d8dd7e9d7000f6b6cc7bc5a72c4214c5036": "bff0ca7fcd3a2329cc2befada7cee23b",
".git/objects/4b/da3a206bcb3970477db6475c867fddc6eb8d28": "4ce59b5f61e8f066edab5534e6dce270",
".git/objects/4c/e99b1a19d2b2356182741720a71e58420de780": "2419632a396d8e95f9cb57f801125367",
".git/objects/4e/9c3a6aa36751d8268aef144ee330db5172aa4e": "c90d2c1b4212f703367a7c7234d2c25f",
".git/objects/4e/9e6d056c6de4ff8398754043724ab315bd1ab1": "210de5947ac1263c107b4f1a4d34b23b",
".git/objects/4f/28abcda37c4bf09dd5cfacdc5c1551471d5aa1": "36759e2cdcab2f7a74c52dad5adbdf57",
".git/objects/4f/8c6a18e30f16980f824b98f7685436f542f576": "6cd819cc758dd01ba049c49bf9b80334",
".git/objects/4f/c991018e0fdc84dc179f7636878a1188edb76e": "bd79de4c211803d301a28550f352f430",
".git/objects/4f/d7a546d8f2c30b9d2196067349c067ad9e5e3a": "74272604e3d77964d8eb5d38a27e2b6e",
".git/objects/50/fe8fdf73d5d8e042c010891da120101392893c": "9c14331d0223e3cbb60d96988d2bb58c",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/17e52fc45dbcb87abc1223f395fff2df33fd16": "4ce92ed69b0a5c523562fcb26f18ad8e",
".git/objects/51/23b638dd7a49a1179924166a71241e5953bb7b": "7406d43f1e7af8f791011d5db8ab549c",
".git/objects/51/a47fae4f7312c3e9686c92c2af85f7b51e6fc6": "f1471912b4c10f48e048e4682956d6fe",
".git/objects/51/a7f0de51a84cd18f165e10f65417a7591b09c4": "d51c2c38e22388a2d0dcdecf93881968",
".git/objects/53/06a87a20ab09dbffbec032b8970418f63139fb": "5e960ac08b2dfc02d326fa6277b8fbcd",
".git/objects/53/e841a866db70b614cf2b9ed182b8d0523e3b02": "07a7c7212fb842d38e7e7295c95de2bf",
".git/objects/55/208905d6ded1b574bac579ec2dee2d192b7ac6": "5abe561fbea20adba897bccd1756e5c4",
".git/objects/55/63f66c1ee5cee249b90de14b5c4145f4835d0f": "6409eb04d3fa62826f088ce10d4cbaa2",
".git/objects/59/96fe77002cc4fb2dcdbe740e0fae0f810289c3": "cbead629fb42f5f96a53e84b3db5d29e",
".git/objects/5e/142478f09291cf6ac60a547c44010b6214a627": "a2ccec65d6140b43ff131b387d992227",
".git/objects/5e/42e342fb14beba2ffc80582e25522f5e4c766e": "1155014393a1843a6e9295554965a811",
".git/objects/5f/3a2d854d31c7148bc9383c28177193659645ac": "5f3f71a5c2f14b4bd57216a44cbd8655",
".git/objects/5f/af9edc896b99c3afdccb087c5f3adf89234e9b": "e51e9830a92b5557ff86597b039931cb",
".git/objects/61/b7451ee797148ccfe88999e536579949261947": "dea2cfa61f5ab0fa8e9c7c0706f47450",
".git/objects/61/d1bac547877f33ccbcd6bd4123da6e91631921": "46909a7ce02fb22e89033f9313681c3c",
".git/objects/61/e6fb2d53627985ac3423700d89b42727b10766": "fc02af3f802e73ef4678ff3cc689ae95",
".git/objects/64/737c838db6721d4d996aa059103a45b18c6561": "380c8571904c7b7898fd2d47da41f467",
".git/objects/67/0c8ff7fa277ad54e71985bc9205e42326465da": "c5bf49bb3f53f68a045d2d8310cc4e12",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/ffa1e30cceef8ce48b609dd7a3cf746470f7ba": "920d220b4064e4ca7c2155201852a3c0",
".git/objects/6a/3f475e622854788e1fbd282a633a3e4622b826": "b0640c6eeab2dd6bd4b86d9fa90d364f",
".git/objects/6a/7134500db8f189381da51b7942dacce09b2788": "b35a01d61c2e33bf4954378e52663d15",
".git/objects/6e/a162fea8688faf947f6411c7642c8b30180f73": "a3c3ac1c2fc9a22d1355fecde2f20db5",
".git/objects/6e/c93bc818a028d577e50b8b73194e1e5a072007": "1b032832137a8b73037a2fa4a916f6b4",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/66881f9e040b05039fcaa419ea71a8b1b63539": "fdbcd999a61b0b3f8c8094de81884627",
".git/objects/71/af39ef637c35162df4c72c9e2626f53c0bdef0": "9cb93ded6499c62f506cd25bb9394a04",
".git/objects/73/4f4670acbf5cb445e28a459ba94a1edbf68e42": "3b76a18c3809e68332b41debb3042abe",
".git/objects/74/19d3889aaddfcfa256fb28d0f7442e3527b703": "d1d7678ce085af90901826f5bf117e2a",
".git/objects/74/e3c45249c46e3aaecaf1db59a4facf85a7e5bd": "b199f0f67349dd6a69166b8c7069f364",
".git/objects/75/a709088ff32fee33079b9a79f7bbf6ea63a149": "cf77956f1c3a52c86338c30471de5b96",
".git/objects/7b/e0c458e533bc6333cf51f3fae2445f0985dfae": "4962566dbf8067c1b66d088fe5ac15cf",
".git/objects/7c/1ac5eeba113439b93fe41e272918b9cdbf2bde": "4d88197d1f69abf9f8b4e94ec1c3926c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/378410cad42d88bc44ec696be08b5354f0f88c": "8d5dbe689b3b2fec77552a9aaa07d1b0",
".git/objects/7e/77b3cf40d2e5899ca4611e907399de817a18a5": "c8dc356d5129efcec23d5666dcdde629",
".git/objects/7f/b04ec87d9214d47d1152606a3aa59eed299465": "cdc2adce51345d65043e713ce4379f99",
".git/objects/83/342467509a3e9b0c364c49f1d12cb0be7b6fde": "873d403c5a28093271662c1abd42720b",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/3e56aa4a98a2a913d36832026eaa23a5bd2c0d": "2558219b980428227b37b73124754333",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1e71af3b4552756bf69b89220d0c9a9bcb0d5e": "ed7faa9ec29fa642a84b0d0b534e2847",
".git/objects/8c/74f14ce4ebf2ce465c7929e04aa339c17513ee": "c3b81b93e826662ea0937a5d4adacd79",
".git/objects/8c/c907367fe5d03f6a84e34ab2c1fce4839d02fd": "5eeb7c2ec56435ea1549d608cfff196b",
".git/objects/8d/2f848167229211b1dbfde6761c18b6e38571f3": "e850b4c11bbdf396a17b7befb587c9bf",
".git/objects/8d/b80e40d0bbd7304ef532ddc857e442c68e4961": "ceea8738d801b8e4619a5fe194702780",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/6d97498dec5991f240b4f6061cfafdef7a978d": "6a0b6884baaf2ca15b3709b2e868ae85",
".git/objects/8e/722c96e8d0bd7165c41cc83cc2529f888ea066": "8b282e31aba7cf5462af9c57f25ebf7e",
".git/objects/8f/1017b82fec181e279083e818d5b5c0ac7fbca1": "44550e82f757a28c848ab0e8c077f5b0",
".git/objects/8f/3a91430019435d7bfec74b2ac2246beafd40eb": "dca16129868652eb83f395f7f937cec9",
".git/objects/92/1cc02026ece31c9dd5fa78a35581fd4d94c3e0": "753322eb303d9f891eb969be14e5924e",
".git/objects/92/e9a55b79d0ba7cb335b9ccc244ec4afe3f7a8a": "73ca4c64533c83580871276b4c870d2b",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/f9d4c295cb2402d828a7e9ecbed53e361714d5": "b7a7220a9dbc0a19ff32c7f8ccba528d",
".git/objects/95/e0bad27e39cae7a771d5976e349dee6ea13366": "b82af9aee30f31dbc0c3a4645f043873",
".git/objects/96/b0470bcd283166d9bcd163d198b488f2c53221": "bf630de326597c7092a0f19100e4c445",
".git/objects/98/c748ed3b6b9df3bc8baf1bdf19be4a793c42f7": "5486c5645c831fcd9d45df869656315e",
".git/objects/99/45168c9f4096afbcb55dde161348eaf8fdc151": "4bc9cc3b8124dd85225d3a0776d39437",
".git/objects/9a/0decb212c09cb666c5110bac8f5d5ab66c19dd": "efc8d13f8b8b97aa1eb7c826cee4f89a",
".git/objects/9b/1774f53bea12a20c99d65cea5db23e8f6d4186": "8a94df45504b4dcd5ceed7e3fa4331e1",
".git/objects/9b/507cbbabc234e9db1a43bb89da75e191d4f532": "5c27e1a5ea91bcd48bb3b917bd4634ae",
".git/objects/9d/6b7552895a4fde28be1d2c7c6f1743d95693b8": "5bfd46b59045cad0201bdc9c662a7c78",
".git/objects/9d/f208f81e73682ea6088e9d9e6e91a7e67e0023": "b4765834b6a189315dd0fcf8f0cb2a79",
".git/objects/9e/138e2864e0b9f642b4cb631495b814bd35af3d": "6a77a7c8edd3914275077d2dd1741ea2",
".git/objects/a0/6979b8a4a12d6176083fde8b745efd01323a08": "f95518f25d3f60985e0b81964871581e",
".git/objects/a3/5e108e051a9bc9124c43cc5ce197fca1eb8122": "f6ed8286471638829bd05ce0021ec70b",
".git/objects/a3/68950af35edacbb5d4bcdc7a8a56766a84d79e": "cd054df53ff9063f3bd09e52efeb8451",
".git/objects/a4/b080c3c94e4f9ce1700d7c34187fcaf5776a92": "8579aa54c6399f450130e9711a6db097",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/434a115651956a20dd969a68d711bb328d3f49": "6f644a226d6f7db531d57c57a28fbe4f",
".git/objects/a7/899bcbd5379a420fa8c40f85e3055a031f3e70": "cc716e1e4f9c48414b34b6670943d062",
".git/objects/a8/1b4f56eefa30b0b4f74ae15536b6217352d596": "7e413580e8408eba5dc9bce32565690b",
".git/objects/a8/5d3829d8409bd145561021c61755869fe194fd": "adfe0b4852b49b2cc7c9c3ba4d1342dd",
".git/objects/a9/f15591b047c22bd3534d8697f8fe4c918baac6": "70de003c307929b1aa296a7ff9e6105f",
".git/objects/aa/6b32ee200ca7111bd9a3d4651f1e61688de873": "ad2deb5e5667b1b3469985c5e390d19f",
".git/objects/aa/ecc337b5181530f2408fb04e22cb645c0a1409": "4c21b8d22d7744dcbaebb9f0c502aa4f",
".git/objects/ab/d90ce8bd36f61514ce6c21893f452bf92058ed": "f53132f0248048e369085da4772c5918",
".git/objects/ac/80676935d6484c68193fb6ea596e1365698992": "659a96b7c72918c1a34eab48f41edc80",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/2f798ddddb448ea4742f59c7318af808d314e4": "68b7d6079df0399c9ebeb149563b0521",
".git/objects/b0/22ae4340d9e196850b3b5f12652a809d3e648d": "9d9a8778cef383c3059b506a52230c7f",
".git/objects/b0/e15bd601cdbb07e040d8c208b374b168d9d2d5": "646d53f4d396fae6aeb25624a3fc8317",
".git/objects/b1/371f839e5ab9b26fc7b533c5f14e875164a061": "a676e32f17e3a50953dddbfd9fb9ebc6",
".git/objects/b1/4955f6cc340bf53f4c236d8c8489327322e5f6": "02f9e81f7ec5d46a5f9eaa943c6e23b4",
".git/objects/b1/ac965083ca0152a7a40d7a6111ecece6b2b0f9": "9f54da51e0a4134a538c5ff038c2c23f",
".git/objects/b3/aa1bb66aeee0970a3d29fe265786a135306e5c": "63d97e6a96ec60767fca98c64ad7d5af",
".git/objects/b5/0a5c432f2d6b5226c6f871dad37afe7ad22624": "f4a336e36ee58004700de79b9ab9922e",
".git/objects/b5/62f9d1018d34366318846d8da5f9b22b975efb": "e672c696948d674ea1b112b6ec5289a5",
".git/objects/b5/e29c122567dd36cf647e89d28847964076d864": "d425dec8eda8a7122e69bb89b940eb46",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5e8161f5adbacb4cb1cf030073a3151abf97c0": "56c09f05724d245c2d77be38f8d2d0d6",
".git/objects/b9/03964b7c7e7a9278af55e31667a7e371b7f5f1": "426724cfb2e789aa684116c1396568b9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/3ecce621f827155dcc8b54f56ee8ca00e020f9": "d51d11430911a72224bb53147cb00217",
".git/objects/ba/28d13149f2a954ca246fe144d9497739ef26ab": "ee0279ab03a5a3e26cf1d95236f07723",
".git/objects/ba/e9e0b925097cf0d2685b4dc565965bea53cf4e": "f5f06696f31f8e365a150e62bdd60463",
".git/objects/bb/876a4227ee16d1a9ff6388fd85dff1aa29ba2b": "427269ac64c9b806248e79916bae221c",
".git/objects/bd/dbc88f1d6de4ae3bd67be0fec1955fafcf446c": "a144e384f91bcea47ab16c47eae7661a",
".git/objects/be/aa2a855fb4f0c845a2948bfed41c756fa54f60": "43088f2b1923f68e45682eb9669b9a5d",
".git/objects/bf/a7143c8453c0f6415e9041b40d7dd74f7dd9b3": "43317c569166b42821d8aef0f64a9ee9",
".git/objects/c1/0fcb842580fb4f7a7f5ca93cb92f856c73089d": "e7cb02193787637df7fc653a036adaa8",
".git/objects/c1/4d2d08c56eb48cf1c5bae3c91bc9a9c4668cf2": "740e91fed9272c8becc7c6710a4c0cd2",
".git/objects/c1/e3da228892e53f14aa083595acc7f608ed04cf": "0ebd162af777afcceace72011d093a10",
".git/objects/c1/fa44051dbc86d90888154ae8df8b020ee42de2": "eb7ef3593d20cf945b1b9cd28111d158",
".git/objects/c2/aed16e1e87652b824a10bcb7464bc7adedfd9e": "ee7e30d837ba3a5135b45b052e0d1a38",
".git/objects/c2/fe1a2f82560dde1479dd217b09a2aae68cd243": "39ea0ce1e4914f96c73fff90f9d1f45b",
".git/objects/c7/3378c39c293e50e7c32b377af7f26d9adb7e3c": "572bd63ef86da7f693b1af3cb2b74821",
".git/objects/c7/50a68d8ffdc2526b04af485bc593c3f0ace588": "b0b794fabbc3d82e4dc07ca544d66ffd",
".git/objects/c7/7d24beca0dae5c2877e70ce16e7bcca31f24ac": "3a81408419557608a3ecc0d6dd2225ca",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/898accc16b69e96763187e4dd6cfe315d02d65": "03931736d90959489c22171943dd3ede",
".git/objects/ca/0a98cbf6d792995bba695ffd25c20929022448": "a9a9ff3561242158956eaeb8b6258314",
".git/objects/cb/c518904e5295007e4cd77810cee629cfc1a794": "1c32003fffbcef67096db22e89e1d69e",
".git/objects/cc/6b64b779fe82be044a0fcfd5da02036d1b7b84": "5282d4840c327778b8fd4ffa498adba0",
".git/objects/cc/da3c68cdc78bd0ff9aef4b7642e68439003a36": "d3e7307aba7e0e4ec8e650b25d13a25c",
".git/objects/ce/b1b59ba7d2a9d6d0d8a3fa9b5c1a84540db506": "7a1b057d1ab5c7c7753eb613822be346",
".git/objects/cf/d0dc1af14be3138b81c4708f90ab3c862391bd": "3986228d58c441134637b84ab9e89c96",
".git/objects/d1/bdb0ed1b2fba2fef7c291979a5b1090525eaef": "e869c34b5dabf7195434f4ea461221bb",
".git/objects/d2/3a85b0b56886e2b4b51f77467a48989d9b4f50": "cf195c155f1d919c0a40b264495ec09d",
".git/objects/d2/a847f33d8ba44e7f89dca318e6bb8d2aab93f1": "b429e818ec1506f49253f78e8b8cd144",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3d18b27d62e077bc51ffbee4199ab5b9ed3e22": "e1da8592473620e3118157e0c3b30161",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/bf4b239fc32dbf4d2b467a56bff72a6bc56808": "f6e1540044413df8cac81a44b505528b",
".git/objects/d8/b5637305f531b3f421388bccb669ba8e1ef3ed": "6deb3692b0e9224c1d95be0dc6274f9f",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/6eef3a3b28b810882ec2a4e851da450cb7e2e2": "3999b36ab2b142451369819ef43aca73",
".git/objects/db/4ffcaf02e0770bcbbf8dd2e3a246c12d545204": "71781cce93e5c624f996c2f562330601",
".git/objects/dc/da2dc7b2a459098ddb33dcd4618568232416c1": "54a3d11274e2e001c106ea08604196b4",
".git/objects/de/3abb4f5f565c281b619027eb865b6c80a422eb": "be04155034782d2de6fba4e298860244",
".git/objects/df/b79e052e97155553523a347d88eb7579c72b78": "21936ff2357f2e5bffafd993fe8b98c6",
".git/objects/df/e7bbb9776d7b59d026b3ff67a61dee40658588": "b812181475ef50ee3a0b3d371c00043e",
".git/objects/e0/4a607d009477598475bfa930c502b5c5138ca9": "ccac704500b1fca208945c87edef95fc",
".git/objects/e0/56812f05cfb1b851b8737d520b7e364f2f805a": "1454c413cbc4221d38963e69b3b92575",
".git/objects/e1/ee9b219183ed31d4da20bdbd0ea0b0105c2a1b": "e5688762a322698762f870f5b419477c",
".git/objects/e6/3c6024dca92ec78e1a7259127916fc32759021": "0ebd2f612901935a805f673657654f35",
".git/objects/e7/a5467c05b09b210294a3dc2aa2a9d8622d89c6": "d55330e2f045abdc9f4a273ab5546522",
".git/objects/e7/b42d3636cdbdafe845032fb585509cacd7e51d": "56db8b238c0d3d9fbdd0416dbfe727c6",
".git/objects/e9/527b5e67e7822e40ba9b88cbfb01524439b88f": "cf8a61391e0f95f3000e9bcc4256d1df",
".git/objects/eb/75c67390f0df97458f51d0e8e9839e105b9ddb": "41901cf89121be1344b764cff98ec786",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/44925839bc21de6bbdb67d043a2783495318de": "6db82029cf528230b704714bb4026f9f",
".git/objects/ec/910cf6d4a55b15bcd57202b2c378a339da2f38": "f42f4987ac179a37b329b7a21e35952f",
".git/objects/ec/b52af8c605bb67e55b58a1ade3e8c18c1ce322": "0ccf415902824c8001ee20299d572611",
".git/objects/ed/f30a7394ae79d241d7e9d4ab3d13c5f13edab3": "572c8370e6f2ebf858ee30bedef0c825",
".git/objects/f0/9638e101b22af6c65e4f4bd0c836ceab4d1a0d": "b01af29ceb09687f799ebc9f375c9423",
".git/objects/f1/b01dc675586cb431456943f0dabc7d5bd9ad96": "2fd47f9c2cf45634b3ab78b2fd6c6c17",
".git/objects/f2/1882f1db19cede96717a52969c71fd6b54af5d": "d2d038dd54662489f92aaa790d248f07",
".git/objects/f3/228a3a2c709fa1f6ae6bcb99c8aa01a5262706": "096f629a92309b755e3f86a484e8da49",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/873a9a86f144c7c1be349b7236655d9cef2517": "3895b1b2c5b10e6a27be7513b5934ade",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/083218b1bbaeebf146b3d17365642f47d9eb52": "c0bc13aea6430aa9259e298ec32696de",
".git/objects/f8/dff20996a34368ada4d980f8ca8c476a89870f": "2d08be6716b7504fb768f5773f51485a",
".git/objects/f9/2665ef097267b11dc4f6de4d70e0d9e3a32f4a": "13555cb2bf47661df7fc0869156545ab",
".git/objects/fb/767399dc0a1b9aa6e7696b1ad6717146c707e3": "bf283d2e528b82a77e63b0d6d175ac3d",
".git/objects/fb/d5b0cbfb69ac2bf0112b82607fc89cabf61cc4": "a79ff8d50e325f8c1ca5ff647c326f79",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/1ff908c983e34dcdb72fbca37a052fe88c0ca1": "e6785d3f1f6bbf200ab866408c4acf7c",
".git/refs/heads/main": "4ebc969bcdef6f4709a881d6a4ae30f6",
".git/refs/remotes/origin/main": "4ebc969bcdef6f4709a881d6a4ae30f6",
"assets/AssetManifest.bin": "14bd8d46f1e30f3342db1c86d04f1855",
"assets/AssetManifest.bin.json": "264ac59c6ce36894a711290e3e23c177",
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
"assets/assets/bg.png": "db21ec8628f20b7deb1a24f43a4ffbae",
"assets/assets/bg1.png": "82b34d95f7d8524453799736d2dd585b",
"assets/assets/bg2.png": "01c76d63095304c167fbf75e1c4fe152",
"assets/assets/bg3.png": "139f52eae5dd5e8d52f5080398363011",
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
"assets/assets/Content.png": "7866b3972d313f1bc5f79e101d254886",
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
"assets/assets/home1.png": "02ba7d367903e35cfe1b9757dd644f23",
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
"assets/assets/Inbox.png": "653c09097d800985344a8ba89a0b3fe4",
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
"assets/assets/nike1.png": "ea47ac40ece0ca8b8dd523cac3311b2d",
"assets/assets/nike2.png": "bab2f620e6a9bda104631ab88d614c12",
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
"assets/assets/Post%2520button.png": "3ef49a5971b40ea46e92d91b191dfbe0",
"assets/assets/prfl.png": "72bdb88c3f3f31e92dca3db17fea50df",
"assets/assets/prfl1.png": "66f9c24029f8485feb212518b725c215",
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
"assets/assets/songimg.png": "2dffc2ae8433a1a5f94d706b891c6d15",
"assets/assets/South%2520Korea%25201.png": "a587b679a6c8bfb331e78bdb7ba7cce2",
"assets/assets/Spain%25201.png": "84df0397a73720528c7def669d59e205",
"assets/assets/sprite.png": "bcf5f887e7b71422ea7ad0efabe3fe1e",
"assets/assets/Subtract.png": "5e9c9b7616d059c3b75fa57b3d8ee853",
"assets/assets/table.png": "42fee458b726873f19b2aa84dca82312",
"assets/assets/taski.png": "1ef18850af0f15bd645fb115e28786f0",
"assets/assets/terms.png": "d141689cc04c7fd128ec9c6bf6ba82ec",
"assets/assets/text1.png": "ea5fe5473bbe18b15dfcd77bdfa787ba",
"assets/assets/text2.png": "0e00e16fc94b33ee8ede4254c4c38432",
"assets/assets/toggle.png": "fa7b6518a349ac9b36f5cf74298d0bd6",
"assets/assets/tokyo.png": "a26f1d08abf9874cf4789c8cb42cd6c7",
"assets/assets/track.png": "299398ef08bc3c98b9e7be81c497a6c5",
"assets/assets/Transport%2520Funtional.png": "b58d622385a404cc2fa6157d88cf1a05",
"assets/assets/Union.png": "37a72367e0160136d9ca143a8cf04af5",
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
"assets/fonts/MaterialIcons-Regular.otf": "bc4acb6be3a93cd52c8720a95594e5ea",
"assets/NOTICES": "124442a9f0d2bcbfd92dc0ee868cb37a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f1014444b03c6e5c179e947c22598fd3",
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
"flutter_bootstrap.js": "6984f8a69a9f316f27415ff06117b3e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3ac18a339ff722c9855a47c18781824",
"/": "b3ac18a339ff722c9855a47c18781824",
"main.dart.js": "38bfca29e91af4d0b49217a778fa3325",
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
