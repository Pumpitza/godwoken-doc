"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3101],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,k=l(t,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(m,i(i({ref:e},k),{},{components:n})):o.createElement(m,i({ref:e},k))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6971:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>k});var o=n(3117),r=(n(7294),n(3905)),a=n(4996);const i={id:"quickStart",title:"Developer Quick Start"},l=void 0,s={unversionedId:"quickStart",id:"version-1.3-rc1/quickStart",title:"Developer Quick Start",description:"Hello Godwoken",source:"@site/versioned_docs/version-1.3-rc1/quickstart.md",sourceDirName:".",slug:"/quickStart",permalink:"/1.3-rc1/quickStart",draft:!1,tags:[],version:"1.3-rc1",frontMatter:{id:"quickStart",title:"Developer Quick Start"},sidebar:"sidebar2",previous:{title:"Overview",permalink:"/1.3-rc1/overview"},next:{title:"Godwoken Public Networks",permalink:"/1.3-rc1/connectionInfo"}},p={},k=[{value:"Hello Godwoken",id:"hello-godwoken",level:2},{value:"Connect to Godwoken with Metamask",id:"connect-to-godwoken-with-metamask",level:3},{value:"Transfer Tokens from Nervos L1 to L2",id:"transfer-tokens-from-nervos-l1-to-l2",level:3},{value:"Next Steps",id:"next-steps",level:3}],u={toc:k};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hello-godwoken"},"Hello Godwoken"),(0,r.kt)("p",null,"Welcome! This guide will help you delve quickly into building DApps on the Godwoken Layer 2 blockchain. To get up and running quickly, you will need to set up a network connection with Metamask wallet, and also get tokens transferred from the L1 to the L2 network."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"connect-to-godwoken-with-metamask"},"Connect to Godwoken with Metamask"),(0,r.kt)("p",null,"Ethereum developers who wish to build DApps on the Nervos Blockchain can achieve this by writing Solidity code and deploying it on the Nervos Layer 2 chain, named \u201cGodwoken\u201d."),(0,r.kt)("p",null,"Godwoken is an optimistic rollup solution built on Nervos layer 1 and EVM-compatible."),(0,r.kt)("p",null,"Godwoken aims to provide a solution for dApp builders who seek the advantages of Ethereum - it's build, good tools, and documentation - but not the drawbacks, such as network congestion, high gas fees, oversaturation, and scalability issues."),(0,r.kt)("p",null,"Developers who want to connect to the Godwoken chain can do so via Metamask wallet."),(0,r.kt)("p",null,"Here are the credentials that you will need:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ITEM"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Testnet"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mainnet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NETWORK NAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Godwoken/PolyJuice Testnet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Godwoken/PolyJuice Mainnet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://godwoken-testnet-v1.ckbapp.dev"},"https://godwoken-testnet-v1.ckbapp.dev")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://v1.mainnet.godwoken.io/rpc"},"https://v1.mainnet.godwoken.io/rpc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"71401"),(0,r.kt)("td",{parentName:"tr",align:"left"},"71402")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CKB"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CKB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://v1.testnet.gwscan.com/"},"https://v1.testnet.gwscan.com/")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://v1.gwscan.com/"},"https://v1.gwscan.com/"))))),(0,r.kt)("p",null,"Below is a visual guide on how to connect Metamask to Godwoken:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open the MetaMask app ."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the dropdown with the Network Name to reveal all the available networks."),(0,r.kt)("li",{parentName:"ul"},"Click on the button: \u201cAdd Network\u201d")),(0,r.kt)("img",{src:(0,a.Z)("img/quickStart/metamask-2.png"),width:"30%"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Enter the credentials for Testnet to add the Testnet network."))),(0,r.kt)("img",{src:(0,a.Z)("img/quickStart/metamask-1.png"),width:"30%"}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click on \u201cSave.\u201d"))),(0,r.kt)("p",null,"You have added the Godwoken/Polyjuice Testnet. Repeat the same steps to add the Mainnet."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transfer-tokens-from-nervos-l1-to-l2"},"Transfer Tokens from Nervos L1 to L2"),(0,r.kt)("p",null,"For developers building on the Godwoken EVM, your project might need some CKB tokens. At the time, there is no faucet for requesting test tokens on the L2 network. To get tokens, you will have to bridge CKB tokens from L1 to L2. "),(0,r.kt)("p",null,"This guide is a walkthrough on the process."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Go to Godwoken Bridge"),"\nStart by visiting ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io"},"testnet.bridge.godwoken.io"),". Make sure MetaMask wallet is installed in your browser.")),(0,r.kt)("p",null,'Connect your MetaMask account to the page by clicking the "Connect" button.'),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-1.png"),width:"40%"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Fund an Account with CKBytes on Layer 1"))),(0,r.kt)("p",null,'You have to fund your Layer 1 account. It will be the source of funds for your Layer 2 deposit. To accomplish this, click "Copy Address" to the right of "L1 Wallet Address".'," "),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-2.png"),width:"40%"}),(0,r.kt)("p",null,"Now, visit the Layer 1 faucet where you can request Layer 1 testnet funds: ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"faucet.nervos.org"),"."),(0,r.kt)("p",null,'Paste the copied address into the faucet and click "Claim".'),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-3.png"),width:"40%"}),(0,r.kt)("p",null,"Now, wait for your Layer 1 transaction to be completed. You should see your transaction in the list in the middle of the page. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," this might take a min to process."),(0,r.kt)("p",null,'After using the Layer 1 faucet, your "L1 Balance" should be equal to "10,000 CKB" or more.'),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-4.png"),width:"40%"}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create Layer 2 Account"))),(0,r.kt)("p",null,"Make sure the previous step is complete, and your Layer 1 account is funded."),(0,r.kt)("p",null,'Now type minimum "400" in the "Deposit" field. Then click the "Deposit" button.'),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-5.png"),width:"40%"}),(0,r.kt)("p",null,"You will be asked to sign a message in your wallet. The process will begin after you sign. Your account should be created after a few minutes."),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-6.png"),width:"40%"}),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-7.png"),width:"40%"}),(0,r.kt)("p",null,'After you "Sign" the transaction, you should see your deposit in "Pending" transactions.'),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-8.png"),width:"40%"}),(0,r.kt)("p",null,'After a few minutes, your deposit should land in "Completed" transactions.'),(0,r.kt)("img",{src:(0,a.Z)("img/evmTask1-9.png"),width:"40%"}),(0,r.kt)("p",null,"Congratulations! Your account is now created!"),(0,r.kt)("p",null,"Here is a video walkthrough of the process:"),(0,r.kt)("a",{href:"http://www.youtube.com/watch?feature=player_embedded&v=p6m31gXdZEU\n",target:"_blank"},(0,r.kt)("img",{src:"http://img.youtube.com/vi/p6m31gXdZEU/0.jpg",alt:"Video Guide",width:"50%",height:"180",border:"10"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Continue with the rest of the guides or dive into the ",(0,r.kt)("a",{parentName:"p",href:"/1.3-rc1/evmIntro"},"L2 EVM Training")))}c.isMDXComponent=!0}}]);