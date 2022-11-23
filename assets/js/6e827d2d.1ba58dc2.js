"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[9490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(3117),r=(a(7294),a(3905));a(4996);const o={id:"faq",title:"FAQ"},i=void 0,s={unversionedId:"faq",id:"version-1.4/faq",title:"FAQ",description:"Q: It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?",source:"@site/versioned_docs/version-1.4/faq.md",sourceDirName:".",slug:"/faq",permalink:"/1.4/faq",draft:!1,tags:[],version:"1.4",frontMatter:{id:"faq",title:"FAQ"},sidebar:"sidebar2",previous:{title:"Other Tools",permalink:"/1.4/otherTools"},next:{title:"Reference and Useful Links",permalink:"/1.4/reference"}},l={},c=[{value:"Q: It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?",id:"q-it-is-so-easy-to-switch-from-layer-1-to-layer-2-why-does-it-take-so-long-in-reverse",level:3},{value:"Q: Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai?",id:"q-why-does-it-require-an-amount-of-63-ckbs-to-an-intermediate-address-to-move-funds-back-to-layer-1-when-using-yokai",level:3},{value:"Q: How to Get Layer 1 Block Number?",id:"q-how-to-get-layer-1-block-number",level:3},{value:"Q: CKB transfer on Godwoken testnet via Metamask has failed. What is the solution?",id:"q-ckb-transfer-on-godwoken-testnet-via-metamask-has-failed-what-is-the-solution",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"q-it-is-so-easy-to-switch-from-layer-1-to-layer-2-why-does-it-take-so-long-in-reverse"},"Q: It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A"),": Layer 2 can trust Layer 1 because Layer 1 is more secure. But Layer 1 needs more time to make sure everything is fine on Layer 2 especially for optimistic rollup (a popular Layer 2 solution). "),(0,r.kt)("p",null,"Every optimistic rollup L2 uses a challenge mechanism in their withdrawal process. In Godwoken v1, L1 puts the withdrawal into a challenge period (~7 days) after you initiated the withdrawal request, waiting for observers or challengers to report problems. The withdrawal can be approved only when no challenge is submitted. L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe in this way. Not only Godwoken, other optimistic rollups like arbitrum and optimism also have such a challenge period, e.g. Arbitrum mandates a 7-day challenge period during a withdrawal."),(0,r.kt)("p",null,"We're actively exploring ways to improve the withdrawal experience and support fast withdrawal. Please stay tuned."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"q-why-does-it-require-an-amount-of-63-ckbs-to-an-intermediate-address-to-move-funds-back-to-layer-1-when-using-yokai"},"Q: Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A"),": This is a constraint of the current release of Godwoken (L2). Godwoken uses a withdrawal recipient account (actually a cell in Nervos' term) on Nervos CKB (L1) to act as an identity authenticator. Godwoken authenticates the receiver's identity by using an account signature provided by the recipient and then sends corresponding withdrawal funds. The recipient account requires at least 63 CKBs to be stored on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need this account later. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/concepts/economics"},"Actually, anything stored on Nervos CKB (L1) requires an amount of CKBs (1 CKB = 1 Byte) for its storage space. L1 storage is validated by global consensus, thus it's scarce and needs to be used carefully.")),(0,r.kt)("p",null,"This constraint is a temporary mechanism and will be removed in a future release. Godwoken is the world's first rollup running on a UTXO blockchain. The answer is not ready-made, and we have to explore different ways to find the best design. It's your feedback and patience that help us improve Godwoken and make it better in future iterations. Thank you."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"q-how-to-get-layer-1-block-number"},"Q: How to Get Layer 1 Block Number?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Defi contracts often require interests to be calculated by block number. However, both v0 and v1 networks do not have a fixed layer2 block interval (it is affected by layer1 block interval)."),(0,r.kt)("p",null,"Arbitrum solved this issue by providing a syscall to get the layer1 block number. However, this does not work for Godwoken since the layer1 chain, CKB itself, does not have a fixed block interval (CKB block interval is adjusted by the uncle block rate at each epoch)."),(0,r.kt)("p",null,"We recommend developers use layer2 block timestamp as the trusted timestamp to calculate on-chain interests. More information is available in the following discussion thread: ",(0,r.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647"},"https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"q-ckb-transfer-on-godwoken-testnet-via-metamask-has-failed-what-is-the-solution"},"Q: CKB transfer on Godwoken testnet via Metamask has failed. What is the solution?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," In Godwoken, ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction.to")," must be a contract address. In RPCs such as ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_call"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_estimateGas")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendRawTransaction"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter can only be a contract address, not an EOA address."),(0,r.kt)("p",null,"To transfer value from EOA to EOA, we recommend developers to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer function")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pCKB_ERC20_Proxy")," contract which combines sUDT_ID=1. In Godwoken and Polyjuice, we use CKB as pCKB. More details can be found at ",(0,r.kt)("a",{parentName:"p",href:"/1.4/integration#pckb"},"pCKB")," and ",(0,r.kt)("a",{parentName:"p",href:"/1.4/integration#godwoken-web3-api-compatibility"},"Godwoken Web3 API Compatibility"),". The contract addresses are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mainnet_v1 pCKB_ERC20_Proxy contract: 0x7538C85caE4E4673253fFd2568c1F1b48A71558a (pCKB)"),(0,r.kt)("li",{parentName:"ul"},"testnet_v1 pCKB_ERC20_Proxy contract: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613 (pCKB)")))}u.isMDXComponent=!0}}]);