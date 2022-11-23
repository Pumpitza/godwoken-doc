"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(3117),n=(r(7294),r(3905)),i=r(4996);const o={id:"evmTask6",title:"6. Withdraw From Layer 2 Back to Layer 1"},s=void 0,l={unversionedId:"evm_training/evmTask6",id:"evm_training/evmTask6",title:"6. Withdraw From Layer 2 Back to Layer 1",description:"Withdrawing an asset from Layer 2 back to Layer 1 is another step in the roundtrip process of interoperability. Godwoken is a Layer 2 that is a natural extension of Layer 1, so it has deep integration allowing it to function seamlessly using a built-in withdrawal mechanism.",source:"@site/docs/evm_training/evmTask6.md",sourceDirName:"evm_training",slug:"/evm_training/evmTask6",permalink:"/evm_training/evmTask6",draft:!1,tags:[],version:"current",frontMatter:{id:"evmTask6",title:"6. Withdraw From Layer 2 Back to Layer 1"},sidebar:"sidebar2",previous:{title:"5. Port an Existing Ethereum dApp to Polyjuice",permalink:"/evm_training/evmTask5"},next:{title:"Claim assets on testnet v1",permalink:"/claimFaucet"}},u={},c=[{value:"Task Instructions",id:"task-instructions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:'1. Go to Godwoken Bridge <a href="#1.-go-to-create-layer-2-account-tab-on-ckb-tools-website" id="1.-go-to-create-layer-2-account-tab-on-ckb-tools-website"></a>',id:"1-go-to-godwoken-bridge-",level:3},{value:"2. Submit withdrawal request",id:"2-submit-withdrawal-request",level:3}],h={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Withdrawing an asset from ",(0,n.kt)("a",{parentName:"p",href:"/structure#layer-1-layer-2"},"Layer 2")," back to ",(0,n.kt)("a",{parentName:"p",href:"/structure#layer-1--layer-2"},"Layer 1")," is another step in the roundtrip process of interoperability. ",(0,n.kt)("a",{parentName:"p",href:"/frameworks#godwoken"},"Godwoken")," is a Layer 2 that is a natural extension of Layer 1, so it has deep integration allowing it to function seamlessly using a built-in withdrawal mechanism."),(0,n.kt)("p",null,"Deposits from Layer 1 to Layer 2 are quick. This is because Layer 1 has stronger security than Layer 2. When a deposit is made to Layer 2, it can reliably trust Layer 1 after waiting for only a few confirmations. However, a withdrawal is the opposite. When a withdrawal is made to Layer 1, it must rely on Layer 2, which inherently has lower security. For this reason, the number of confirmations required is much higher in order to guarantee that the security remains reliable. It takes approximately five days from the start of the withdrawal process to the point where funds are actually released on Layer 1."),(0,n.kt)("p",null,'This withdrawal duration may seem exceptionally long, but it is necessary at this stage. Godwoken uses an optimistic rollup architecture that only allows a single honest node in the network. This provides an exceptionally secure basis for Layer 2, but the tradeoff is that it requires a "challenge period" when exiting from Layer 2. This is a period where Layer 2 network operators have time to check and raise issues with any potentially malicious transactions and roll back if necessary. The safety of the network is the first concern. Network parameters may be changed in the future, but only after it has been proven to be safe. It is also possible that other solutions will be created in the future to allow for faster exits from Layer 2.'),(0,n.kt)("h2",{id:"task-instructions"},"Task Instructions"),(0,n.kt)("p",null,"In this task, you will use withdraw from your Layer 2 account. This is the first part of the withdrawal process, and the funds must still undergo a five-day waiting period before they are unlocked and released. The funds will be unlocked automatically after the waiting period."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On the testnet, the withdrawal period is shorter, and you may receive your funds within an hour.")),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before starting this task, you must complete the ",(0,n.kt)("a",{parentName:"p",href:"/evm_training/evmTask1"},"first task")," to create a Godwoken account on the EVM Layer 2 Testnet. If you have not already done so, please do so now."),(0,n.kt)("h3",{id:"1-go-to-godwoken-bridge-"},"1. Go to Godwoken Bridge ",(0,n.kt)("a",{href:"#1.-go-to-create-layer-2-account-tab-on-ckb-tools-website",id:"1.-go-to-create-layer-2-account-tab-on-ckb-tools-website"})),(0,n.kt)("p",null,"Start by visiting ",(0,n.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io"},"testnet.bridge.godwoken.io"),'. Make sure MetaMask wallet is installed in your browser. Switch to the "Withdrawal" view and click "Connect" button to connect your account.'),(0,n.kt)("img",{src:(0,i.Z)("img/evmTask6-1.png"),width:"40%"}),(0,n.kt)("h3",{id:"2-submit-withdrawal-request"},"2. Submit withdrawal request"),(0,n.kt)("p",null,'Type the amount of CKB you want to withdraw in the "Withdraw" input field and press "Request Withdrawal".'),(0,n.kt)("img",{src:(0,i.Z)("img/evmTask6-2.png"),width:"40%"}),(0,n.kt)("p",null,'Press "Confirm" again.'),(0,n.kt)("img",{src:(0,i.Z)("img/evmTask6-3.png"),width:"40%"}),(0,n.kt)("p",null,"Now sign the MetaMask transaction. This is a Typed Signature which means you can see the details of the request you're signing. You can use this data to double-check everything matches your intentions."),(0,n.kt)("img",{src:(0,i.Z)("img/evmTask6-4.png"),width:"40%"}),(0,n.kt)("p",null,"After signing the transaction, you should see a notification confirming that a withdrawal request has been created."),(0,n.kt)("img",{src:(0,i.Z)("img/evmTask6-5.png"),width:"40%"}),(0,n.kt)("p",null,"It means you have successfully initiated a withdrawal process."),(0,n.kt)("p",null,'After five or ten minutes, you should be able to see your withdrawal request in "Pending" transactions:'),(0,n.kt)("img",{src:(0,i.Z)("img/evmTask6-6.png"),width:"40%"}),(0,n.kt)("p",null,'When all the "Blocks remaining" will be mined and "Estimated time left" will be elapsed, you should see your funds back on your Layer 1 account.'),(0,n.kt)("p",null,"Congratulations, you have completed the task! \ud83d\udc4f"))}d.isMDXComponent=!0}}]);