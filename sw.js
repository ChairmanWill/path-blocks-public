if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BP5Mu0-M.css",revision:null},{url:"assets/index-R4v1nTnp.js",revision:null},{url:"css/index.css",revision:"a1a180bac427da4a36c4d742b9f58758"},{url:"index.html",revision:"312d2aa006aafb050951bc07b237c8fd"},{url:"registerSW.js",revision:"48e8f995f47ab314b6a349c796dc71b6"},{url:"manifest.webmanifest",revision:"bb6daaa3581bd799e29ffcc6e89e5d6f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
