if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>a(e,n),t={module:{uri:n},exports:r,require:d};s[n]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6xg7Mg0GFLPXZpdWv51Pa/_buildManifest.js",revision:"4bdee44c57a8eff78599c7dd64dad0fe"},{url:"/_next/static/6xg7Mg0GFLPXZpdWv51Pa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1270-15ec99077bb2f2ad.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/1b62f2e3-adfa6470d1fe7269.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/2221-a3aeb1d8108e373b.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/226.1d10ad60dd62fed8.js",revision:"1d10ad60dd62fed8"},{url:"/_next/static/chunks/2aa3bb4d-2c6be69d7aa2bc73.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/3075-cef9540f384103e3.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/3223-5c34ea2f21ad89ab.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/3229-e51edae17962eb2b.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/3527.94efa690035d1e5a.js",revision:"94efa690035d1e5a"},{url:"/_next/static/chunks/4002-c26c9f769d85627d.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/4081.9866f56ca872c6f9.js",revision:"9866f56ca872c6f9"},{url:"/_next/static/chunks/5303-f46b4e3b3387dc45.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/5794-620b7a2335514dd0.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/6175-7d4c7593d17e6796.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/6764-ad945388e6dc2cd4.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/6894-fb2ae68ab92f1158.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/699-7a2d8153073c26bb.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/7cc387e0-c170971f55761798.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/8014-794f2e917343acd8.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/8286.92b82b5a43ef0b07.js",revision:"92b82b5a43ef0b07"},{url:"/_next/static/chunks/888-72c39524f65ea49a.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/94cf3c84-b5de2e4d84c1d0a5.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/blob/page-44089ef44b2fdb64.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/conway/page-f5807ec7388c73f0.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/html-asset/page-afeedfe48f8b63ad.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/idk/layout-963f9c057966da9d.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/idk/page-ccae03f1adefcfc2.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/model-view/page-2217b63def5ab92f.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/outline/page-e504e6a61f516740.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/play/page-2f70c13ea93e518a.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/trail/page-62502b37e8efe2f2.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/txt-demo/layout-d6ef580aa0be4be3.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/txt-demo/page-76d0d3539481d2a2.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(asset-demos)/video/page-2c8102a59b669851.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(example)/2d-tun/page-39938ca92fb5034f.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(example)/ad/page-fde425fb6e1ea2dc.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(example)/fal-ffmpeg/page-f9ac1a75f915aede.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(example)/higgs/page-ebe37227332b3355.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(example)/screenshot/page-d1cd353fcbf216dc.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(example)/uncert/page-0cef4cd14c60d5c4.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(example)/vid-record/page-204b7812d4177312.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(fal)/camera-turbo/page-d45c89f3ac128022.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(fal)/demo/page-8c5b93ec31312f93.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(in-progress)/(fal)/phi/page-aee7770a7668d9c6.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(in-progress)/(fal)/workflow-test/page-329d2450b649b505.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(in-progress)/(three)/bill/page-45fd3632ab56b7f0.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(in-progress)/(three)/f/page-8d902a0542b494a3.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(landing)/blog/%5Bslug%5D/page-c6b0a273d6ec5cbe.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/(landing)/blog/page-45608e74c8198ab7.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/_not-found/page-7d9218c793ab7b32.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/layout-c2f94c58fd4b3ea8.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/app/page-02f29eeb175fe40e.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/c132bf7d-69692b8790500b77.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/e9f73418-9f56b5e8f5d35d83.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/ebbe300a.4638da507950b7c0.js",revision:"4638da507950b7c0"},{url:"/_next/static/chunks/framework-63a5d844a3662ade.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/main-516a05f32bbfcaae.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/main-app-01f4d82f3ee783c1.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/pages/_app-e1a31528dd0cd4c0.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/pages/_error-6e879713f1bc1094.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-59c12f1561a0c3c4.js",revision:"6xg7Mg0GFLPXZpdWv51Pa"},{url:"/_next/static/css/4b3d85c9e98ee007.css",revision:"4b3d85c9e98ee007"},{url:"/_next/static/css/a837f78c3d3fa0de.css",revision:"a837f78c3d3fa0de"},{url:"/_next/static/css/b5745d65f3391e8d.css",revision:"b5745d65f3391e8d"},{url:"/config/home/cameraconfig.json",revision:"dc8fa04c6887c66ece5d617a8aa25e45"},{url:"/config/home/index.json",revision:"e06b7de3cca09aed345584f728e4c50d"},{url:"/config/home/rendererConfig.json",revision:"89a84ec8313e8404ead51095e0c9fa20"},{url:"/config/home/threeJSConfig.json",revision:"e66a7ef766c55812c7b9e0bff994a51f"},{url:"/config/home/threeJSLightingConfig.json",revision:"ef6977c7017bc354b5c9722ece124715"},{url:"/config/home/threeJSModelConfig.json",revision:"fdf612fe7e51ccab0a5d06f626f16937"},{url:"/config/home/threeJSSceneConfig.json",revision:"b6b220c1a05f8a9e3c7ea1e0bc1f91f0"},{url:"/config/home/types.ts",revision:"a36cef0388153705f9a06d60b51c742d"},{url:"/config/readme.md",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/docs/GLTF_model_size_considerations.md",revision:"f6a4797e61249fda1190f0c479920788"},{url:"/docs/backlinks.md",revision:"70b10fe1c6e902f0bc776494e5612a4a"},{url:"/docs/brainstorm_new_search_paradigm.md",revision:"b70f0cfce13c10be78ea97b7e15f50b6"},{url:"/docs/confused_by_docker_question.md",revision:"44f41c36d1c9ddd80cc6d3dbaef6fa48"},{url:"/docs/fal.md",revision:"f9370afd4c0ceea667c05e2adb548acf"},{url:"/docs/intro-cannon.md",revision:"d04642083b148e14b7c8005f2d25070c"},{url:"/docs/model_file_to_tsx.md",revision:"cd666d451cc0bee8683ecfe515cd1be4"},{url:"/docs/new_paradigms_ai_search.md",revision:"75620182979fc22b71d2a8ed769247b3"},{url:"/docs/openai_sitemap_xml_breakdown.md",revision:"048ffd198ae45818ad64da97c2a65b82"},{url:"/docs/ts-4-1.md",revision:"33a7dbbf1b42b9467cbff5106c547944"},{url:"/docs/useNode.md",revision:"efcaaad4a6868f6ea2a756b6fcd4efbc"},{url:"/docs/useRef.md",revision:"1b1d9b6d5b95f450515a82b04af3709a"},{url:"/docs/useSuspense.md",revision:"7ac8d5d3c0a3609ca6feae11c40d41bf"},{url:"/gltf-react-three/android-chrome-192x192.png",revision:"ea37a280bae0b15f35a2e14b18e1a0e2"},{url:"/gltf-react-three/android-chrome-512x512.png",revision:"01c2f6aaa41660835e978381e0dda8ed"},{url:"/gltf-react-three/apple-touch-icon.png",revision:"451b0a3ec59c2536bb36954768060ac3"},{url:"/gltf-react-three/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/gltf-react-three/favicon-16x16.png",revision:"476e37558de8fce58aea1f760c1cac70"},{url:"/gltf-react-three/favicon-32x32.png",revision:"76d11ad813f3b9bcb43d3c5ea170d309"},{url:"/gltf-react-three/favicon.ico",revision:"c8256c8464361e06075701083b8f9aab"},{url:"/gltf-react-three/mstile-150x150.png",revision:"ab9a6e4c57149633b39e20eae030bc74"},{url:"/gltf-react-three/site.webmanifest",revision:"9f7fb2d8b787256ce8e5895ba334e214"},{url:"/html/homepage.json",revision:"dcf1bdcbff6d933e5094a2614d5617d4"},{url:"/html/marketplaceContent.json",revision:"9b2cd8bf197a169800b0d24097def4f5"},{url:"/icons/android-icon-192x192.png",revision:"9f29f1d7c8f6da2d2e64bce1d3136d3f"},{url:"/icons/android-icon-512x512.png",revision:"9f29f1d7c8f6da2d2e64bce1d3136d3f"},{url:"/icons/apple-touch-icon.png",revision:"538a91302401ac461adfe1b509181921"},{url:"/icons/favicon-16x16.png",revision:"5998cde017dee1b68827ac575ce6a300"},{url:"/icons/favicon-32x32.png",revision:"2a82680a8c270c3ad4b8341f5ef897f8"},{url:"/icons/favicon.ico",revision:"4106c96e0a55d35b1b13fa4281a907b7"},{url:"/icons/safari-pinned-tab.svg",revision:"71900474b7472e9395f81cda3f8abd6a"},{url:"/icons/share.png",revision:"f04a8d2b41543ef4669c07e6d04e2d94"},{url:"/img/logo.svg",revision:"decc003b878ac85389b67a76f93e59f8"},{url:"/img/scores/lighthouse.md",revision:"9be9486e7a0b5d30829c83ee1529a2e3"},{url:"/img/scores/lighthouse.svg",revision:"354748450a08b0d6a92b2ceec631cb59"},{url:"/manifest.json",revision:"bc6ca85c72b588c2f76ce840026e9800"},{url:"/models/1up.glb",revision:"c0b984b4f4f7cbb8096184c729fac7d5"},{url:"/models/BlockEmpty.glb",revision:"bd42e08d2cb6d75eba3c8ca8cbf16b80"},{url:"/models/BrickBreak.glb",revision:"50192345ef63f7878919363ebdb52975"},{url:"/models/GoalStar.glb",revision:"60a0a10cf6cd5fc5e243d09e222b7414"},{url:"/models/Goomba.glb",revision:"545be2a31bc761775fff0f8090fe4698"},{url:"/models/GreenShell.glb",revision:"d2cba0a64f0cf7599c499e64b2943d90"},{url:"/models/Koopa.glb",revision:"7c8715dbf03ed985e5b7e0fc2d416b35"},{url:"/models/Level.glb",revision:"f522e0101bdc2c7472177806b30d1f30"},{url:"/models/Player.glb",revision:"53e41a021bc9ea32d0ebb1e66d49a37d"},{url:"/models/Spiny.glb",revision:"13dca63860b3baad1b7fb9672cc0d7c9"},{url:"/models/a_book_of_poems.glb",revision:"2ca1147340625d050f1cc3f4c930d44a"},{url:"/models/billboard.glb",revision:"1be8046c1a59f40100cf326c84359ac4"},{url:"/models/cloud-fluffy.glb",revision:"cc98361b2d34772435906e62a44a05fc"},{url:"/models/coin.glb",revision:"e83ca76959f8edf956b1a37f0793845f"},{url:"/models/dog.glb",revision:"2c3b3178090501902d4414cd6b5d45b5"},{url:"/models/duck.glb",revision:"7c6431b6bccb703a690a2ec16d725fd9"},{url:"/models/fiesta_tea-transformed.glb",revision:"d4ae4c7f9fa5662a44f0d8873bbfa35e"},{url:"/models/holograming_man.glb",revision:"1167b092c32e6cecda62a9d21ce2e14f"},{url:"/models/logo.glb",revision:"355f8d0f4374b4435d8d914ce0ffd222"},{url:"/models/mario_big.glb",revision:"f72d196133dc0217f42e9a1dcc87598e"},{url:"/models/mario_level.glb",revision:"9a3fba64a072321346f440b4e8546aa4"},{url:"/models/mariolevel.glb",revision:"e5e4d7046a559bf727a2d911825e624c"},{url:"/models/marioleveltest.glb",revision:"c323ea59e7d0b1dc4e6c0ba099a98780"},{url:"/models/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb",revision:"ef40092c2189a79c1d2cd9e03e3f7b46"},{url:"/models/space_boi.glb",revision:"d3cba88087d006bb4ed0c85fcc4cd709"},{url:"/models/still_life_based_on_heathers_artwork-transformed.glb",revision:"b0ac10d6060799356fa5e74e4ad9e41c"},{url:"/models/suzanne.gltf",revision:"4f2fdf15cf2775561bb189adbb6b8e7d"},{url:"/raw_data/posts.json",revision:"237a0151f5633414ffcdf837ccba95cf"},{url:"/robots.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/serwist.worker.ts",revision:"f85c03c0c8a05d9e4e4ae88e1ff16114"},{url:"/video/10-example/10.jpg",revision:"fb2b05b65348f9866a09b8570239151e"},{url:"/video/10-example/10.mp4",revision:"e691ba1f00a8dc02cbd7fb416ca02e51"},{url:"/video/readme.md",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
