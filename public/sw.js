if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/OyhCDiAsX1CLy42S3x6I_/_buildManifest.js",revision:"95bfa7b0bf6600aa01c52b6bf799cb23"},{url:"/_next/static/OyhCDiAsX1CLy42S3x6I_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1048.1a9b2dccbdca6603.js",revision:"1a9b2dccbdca6603"},{url:"/_next/static/chunks/120-07234cc5ede1d54b.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/1270-a9871b14bcd87c65.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/1690-853ca08b659552f1.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/1705-fbcdab79f33d4e84.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/1847-7f69d1e31b221b79.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/1b62f2e3-3bdfb293dc0da12e.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/226.1b0e23837712b7c1.js",revision:"1b0e23837712b7c1"},{url:"/_next/static/chunks/2357.7aeadcc7f174df8a.js",revision:"7aeadcc7f174df8a"},{url:"/_next/static/chunks/2744-cb570d689982f2c3.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/2aa3bb4d-8fa81f10af26bc27.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/3075-6a86eae0ea1c5410.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/3527.ad1340d3588ca2c7.js",revision:"ad1340d3588ca2c7"},{url:"/_next/static/chunks/3648-2c4adfb06cc07605.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/3755-b70bbe9a03b44e21.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/3816-fbb528d4c5769ced.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/3909-45d9a316a4499021.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/4002-e8c498611cc227dc.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/4752-1a961d714d650654.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/4890-c17177405613c139.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/5037-49b0d95616bb858c.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/5303-a06723d1dbc0c949.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/5794-32e62b20004190e0.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/6349-b8cf0816b09064b2.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/6699-597b1ba528dfe25c.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/6764-42daa10fc0217db0.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/6894-0f46f38c13831ac7.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/7cc387e0-12217258408fa599.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/8014-d79c5fed402b8d3f.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/9169-c0f466765e8cf16b.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/9495-a1db455f8488e2c5.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/94cf3c84-119fd5fc41794248.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/9644-89958571f5e1dfc3.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(Ebowwa_Branding)/dev/formatjson/page-9e1678282831135e.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(Ebowwa_Branding)/dev/html2tsx/page-361da08c2393d8ae.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(Ebowwa_Branding)/dev/linkconvert/page-caed4e0100500a37.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(Ebowwa_Branding)/dev/page-a4a58ceb88047973.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(Ebowwa_Branding)/elijah/%5Bwhoiselijah%5D/page-7d1793602db7357e.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(Ebowwa_Branding)/elijah/page-45ccbe30f3d03f38.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/(graphics)/2d-tun/page-ccd7de074e6b12b7.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/(graphics)/conways-game-of-life/page-4eb98d97e2855628.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/(graphics)/higgs/page-9657887a283bb340.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/(video)/2Vid/page-1ff6ec86e4dc739e.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/(video)/vid-record/page-e8469256d41a3d02.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/TrimLineQuote/page-59b00f99dea20348.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/ad/page-addb553a68468f5a.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/node-flow/layout-d1ff57c42aa963d6.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/node-flow/page-b690134afcc6b0e6.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/notion-clone/layout-151f9d683b437f2b.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/notion-clone/page-2ac2488f44714ae0.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/screenshot/page-3996e374949549e0.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(examples)/uncert/page-a75c81129fd66ded.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(external-api)/(fal-ai)/camera-turbo/page-f431b6785c07c8e1.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(external-api)/(fal-ai)/demo/page-4d0098babc3367b3.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(external-api)/sketch/collection/personal/page-dac7f9781424ee66.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(external-api)/sketch/collection/public/page-8a05808c4ad33611.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(in-progress)/(fal)/phi/page-b4c6e612cb384cda.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(in-progress)/(fal)/workflow-test/page-2a9fdd57d4cb584d.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(in-progress)/(three)/bill/page-5a327605e066108e.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(in-progress)/editor/page-6acb7c41e7355758.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(in-progress)/ollama/page-6ae4d09cb9ea06fb.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/Bring-your-own-assets/page-a6716eb7180606e8.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/blog/%5Bslug%5D/page-d103791d6bb532d1.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/blog/page-22f6a30c53273b0b.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/contact/page-63a2e353376e6eda.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/landing/%5Bcomponent%5D/page-f8760f15d4568c52.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/landing/layout-9ebffff9e79876fc.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/landing/page-1470ff6fe6f7a2aa.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(landing)/share-us/page-75e56aa5a8361a9d.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(platform)/models/%5BmodelId%5D/page-d3c91d07a69ed92d.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(platform)/models/page-c689b0616327c15b.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/ascii-protocols/page-a140637cfd9f0533.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/ascii/page-046f0f7ad8c6dbc1.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/blob/page-c3ccd2d2d321199e.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/conway/page-d95798348aac846c.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/demy/page-2ae6431c30b477fc.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/html-asset/page-28261159f5069860.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/idk/layout-c0f6e8ccffaf811b.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/idk/page-252a2d84ebc7b0c7.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/model-view/page-79f17a7a012a65f6.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/outline/page-f975b150dc42f3c8.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/pee/page-0b7d3a9d5de3a7c8.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/play/page-1991d07abf2d72b9.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/trail/page-61c64947905000fa.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/txt-demo/layout-a8e4548eac817460.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/txt-demo/page-20eb82b37ade106e.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/(three-asset-demos)/video/page-ffb0ec46d664011a.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/_not-found/page-324b1bf5631768b0.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/layout-1247ba767ec2d2d5.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/mac/page-db54d2bce03ac487.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/page-ee89b7127d43614c.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/app/picture-frame/page-c20ee64dc4e3fb84.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/c132bf7d-69692b8790500b77.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/db3d794d-dc1340611d4d10ee.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/e9f73418-cc5919f60a7ac034.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/ebbe300a.f539a7f3a8947c0e.js",revision:"f539a7f3a8947c0e"},{url:"/_next/static/chunks/framework-20afca218c33ed8b.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/main-443889da64b478e0.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/main-app-a33a197cb475889c.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/pages/_app-f722851f1b872524.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/pages/_error-159ccaf270cab58a.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e97f3ac53b5f65b2.js",revision:"OyhCDiAsX1CLy42S3x6I_"},{url:"/_next/static/css/a275cc2b185e04f8.css",revision:"a275cc2b185e04f8"},{url:"/_next/static/css/a837f78c3d3fa0de.css",revision:"a837f78c3d3fa0de"},{url:"/_next/static/css/af11d0fb120cdac5.css",revision:"af11d0fb120cdac5"},{url:"/_next/static/css/b5745d65f3391e8d.css",revision:"b5745d65f3391e8d"},{url:"/config/home/cameraconfig.json",revision:"dc8fa04c6887c66ece5d617a8aa25e45"},{url:"/config/home/index.json",revision:"e06b7de3cca09aed345584f728e4c50d"},{url:"/config/home/rendererConfig.json",revision:"89a84ec8313e8404ead51095e0c9fa20"},{url:"/config/home/threeJSConfig.json",revision:"e66a7ef766c55812c7b9e0bff994a51f"},{url:"/config/home/threeJSLightingConfig.json",revision:"ef6977c7017bc354b5c9722ece124715"},{url:"/config/home/threeJSModelConfig.json",revision:"fdf612fe7e51ccab0a5d06f626f16937"},{url:"/config/home/threeJSSceneConfig.json",revision:"b6b220c1a05f8a9e3c7ea1e0bc1f91f0"},{url:"/config/home/types.ts",revision:"a36cef0388153705f9a06d60b51c742d"},{url:"/config/readme.md",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/docs/GLTF_model_size_considerations.md",revision:"f6a4797e61249fda1190f0c479920788"},{url:"/docs/backlinks.md",revision:"70b10fe1c6e902f0bc776494e5612a4a"},{url:"/docs/brainstorm_new_search_paradigm.md",revision:"b70f0cfce13c10be78ea97b7e15f50b6"},{url:"/docs/confused_by_docker_question.md",revision:"44f41c36d1c9ddd80cc6d3dbaef6fa48"},{url:"/docs/fal.md",revision:"f9370afd4c0ceea667c05e2adb548acf"},{url:"/docs/intro-cannon.md",revision:"d04642083b148e14b7c8005f2d25070c"},{url:"/docs/model_file_to_tsx.md",revision:"cd666d451cc0bee8683ecfe515cd1be4"},{url:"/docs/new_paradigms_ai_search.md",revision:"75620182979fc22b71d2a8ed769247b3"},{url:"/docs/openai_sitemap_xml_breakdown.md",revision:"048ffd198ae45818ad64da97c2a65b82"},{url:"/docs/ts-4-1.md",revision:"33a7dbbf1b42b9467cbff5106c547944"},{url:"/docs/useNode.md",revision:"efcaaad4a6868f6ea2a756b6fcd4efbc"},{url:"/docs/useRef.md",revision:"1b1d9b6d5b95f450515a82b04af3709a"},{url:"/docs/useSuspense.md",revision:"7ac8d5d3c0a3609ca6feae11c40d41bf"},{url:"/gltf-react-three/android-chrome-192x192.png",revision:"ea37a280bae0b15f35a2e14b18e1a0e2"},{url:"/gltf-react-three/android-chrome-512x512.png",revision:"01c2f6aaa41660835e978381e0dda8ed"},{url:"/gltf-react-three/apple-touch-icon.png",revision:"451b0a3ec59c2536bb36954768060ac3"},{url:"/gltf-react-three/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/gltf-react-three/favicon-16x16.png",revision:"476e37558de8fce58aea1f760c1cac70"},{url:"/gltf-react-three/favicon-32x32.png",revision:"76d11ad813f3b9bcb43d3c5ea170d309"},{url:"/gltf-react-three/favicon.ico",revision:"c8256c8464361e06075701083b8f9aab"},{url:"/gltf-react-three/mstile-150x150.png",revision:"ab9a6e4c57149633b39e20eae030bc74"},{url:"/gltf-react-three/site.webmanifest",revision:"9f7fb2d8b787256ce8e5895ba334e214"},{url:"/html/homepage.json",revision:"dcf1bdcbff6d933e5094a2614d5617d4"},{url:"/html/infoSubstrateData.json",revision:"e31f4346519f3c6ba08a88050356723d"},{url:"/html/marketplaceContent.json",revision:"9b2cd8bf197a169800b0d24097def4f5"},{url:"/html/sitemap.json",revision:"1d84352e76b7f67b4c089646c4a2b284"},{url:"/icons/android-icon-192x192.png",revision:"9f29f1d7c8f6da2d2e64bce1d3136d3f"},{url:"/icons/android-icon-512x512.png",revision:"9f29f1d7c8f6da2d2e64bce1d3136d3f"},{url:"/icons/apple-touch-icon.png",revision:"538a91302401ac461adfe1b509181921"},{url:"/icons/favicon-16x16.png",revision:"5998cde017dee1b68827ac575ce6a300"},{url:"/icons/favicon-32x32.png",revision:"2a82680a8c270c3ad4b8341f5ef897f8"},{url:"/icons/favicon.ico",revision:"4106c96e0a55d35b1b13fa4281a907b7"},{url:"/icons/safari-pinned-tab.svg",revision:"71900474b7472e9395f81cda3f8abd6a"},{url:"/icons/share.png",revision:"f04a8d2b41543ef4669c07e6d04e2d94"},{url:"/img/GNjTh2zaYAABiaQ.jpg",revision:"ecc45d0f1d9db589869c87cf95d90d8b"},{url:"/img/earth.jpg",revision:"8bfb2605a9e56a2f09eb0961ffa0124f"},{url:"/img/scores/lighthouse.md",revision:"9be9486e7a0b5d30829c83ee1529a2e3"},{url:"/img/scores/lighthouse.svg",revision:"354748450a08b0d6a92b2ceec631cb59"},{url:"/manifest.json",revision:"bc6ca85c72b588c2f76ce840026e9800"},{url:"/models/glb/coin.glb",revision:"e83ca76959f8edf956b1a37f0793845f"},{url:"/models/glb/mac-draco.glb",revision:"e55dfd939d79ebea41d613294a588530"},{url:"/models/glb/picture_frame.glb",revision:"560621bf760e837758c1dfb4eb1c380d"},{url:"/models/stl/Piranha_Plant_Low_Poly_v3.stl",revision:"dbcf4c5523dfe13302a68bc3c94be5f5"},{url:"/raw_data/flow-nodes.json",revision:"b6fce8ad5c62532606a481d4c8c46c56"},{url:"/raw_data/models.json",revision:"c508969f4fbf329485fa81ba40adad39"},{url:"/raw_data/posts.json",revision:"237a0151f5633414ffcdf837ccba95cf"},{url:"/raw_data/world_background_map.json",revision:"f77b0b0ae443b6236945c6831a26e54b"},{url:"/robots.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/serwist.worker.ts",revision:"f85c03c0c8a05d9e4e4ae88e1ff16114"},{url:"/svg/IMG_2603.svg",revision:"3fa258f719a64150a89cd00c443f5e5d"},{url:"/svg/logo.svg",revision:"decc003b878ac85389b67a76f93e59f8"},{url:"/video/10-example/10.jpg",revision:"fb2b05b65348f9866a09b8570239151e"},{url:"/video/10-example/10.mp4",revision:"e691ba1f00a8dc02cbd7fb416ca02e51"},{url:"/video/blackhole.mp4",revision:"c64ebe2ae48b47cc3f8d833a9be6e55c"},{url:"/video/readme.md",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
