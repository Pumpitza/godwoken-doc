"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[949],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3e3:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(3117),r=(o(7294),o(3905));o(4996);const a={slug:"/",id:"getStart",title:"Get Started with Godwoken",sidebar_label:"Get Started with Godwoken"},i=void 0,l={unversionedId:"getStart",id:"version-1.5/getStart",title:"Get Started with Godwoken",description:"Welcome to the Godwoken Docs site.",source:"@site/versioned_docs/version-1.5/getStart.md",sourceDirName:".",slug:"/",permalink:"/1.5/",draft:!1,tags:[],version:"1.5",frontMatter:{slug:"/",id:"getStart",title:"Get Started with Godwoken",sidebar_label:"Get Started with Godwoken"},sidebar:"sidebar2",next:{title:"Developer Quick Start",permalink:"/1.5/quickStart"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Godwoken Docs site."),(0,r.kt)("p",null,"Godwoken is an EVM-compatible, layer 2 optimistic rollup solution built on Nervos layer 1. Godwoken - a key component of Nervos Layer 2 - works in conjunction with the Polyjuice EVM framework in order to create a scalable EVM-compatible solution for Nervos, that is, ",(0,r.kt)("strong",{parentName:"p"},"Godwoken"),"."),(0,r.kt)("p",null,"Godwoken aims to provide a solution for dApp builders who seek the advantages of Ethereum - Like it's build, good tools, and documentation - but not the drawbacks, such as network congestion, high gas fees, oversaturation and scalability issues Ethereum faces."),(0,r.kt)("p",null,"Nervos Network has the vision to enable interoperability across the blockchain ecosystem with a multi-chain solution. And Godwoken is a big step towards achieving this greater vision."),(0,r.kt)("p",null,"If you are currently an Ethereum developer, Godwoken can help you migrate existing dApps to Nervos effortlessly. Allowing you to expand your reach and brand awareness in a DeFi dev-focused network, benefit from instant transaction finality, and low fees in an Ethereum-like environment."),(0,r.kt)("p",null,"This section will guide you on how to get started with Godwoken.\nHere are links to some useful resources for you to build on Godwoken."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want to know L2 Godwoken Compatibility details, visit ",(0,r.kt)("a",{parentName:"li",href:"/1.5/integration"},"Integration Guide for Ethereum Developers"),"."),(0,r.kt)("li",{parentName:"ul"},"For information on Godwoken connection details, visit ",(0,r.kt)("a",{parentName:"li",href:"/1.5/connectionInfo"},"Godwoken Public Networks"),"."),(0,r.kt)("li",{parentName:"ul"},"To get a general understanding of Godwoken, visit ",(0,r.kt)("a",{parentName:"li",href:"/1.5/overview"},"Overview")," and ",(0,r.kt)("a",{parentName:"li",href:"/1.5/gwtxLife"},"Godwoken Transaction"),"."),(0,r.kt)("li",{parentName:"ul"},"To understand the structure of the Nervos Network, visit ",(0,r.kt)("a",{parentName:"li",href:"/1.5/structure"},"Structure"),"."),(0,r.kt)("li",{parentName:"ul"},"For instructions on how to deploy a Godwoken local network, visit ",(0,r.kt)("a",{parentName:"li",href:"/1.5/deployLocalNetwork"},"Deploy a Local Network with Godwoken-Kicker"),"."),(0,r.kt)("li",{parentName:"ul"},"To deploy a smart contract to Godwoken layer 2, visit ",(0,r.kt)("a",{parentName:"li",href:"/1.5/deployContractHardhat"},"Deploy a Simple Smart Contract with Hardhat")," or ",(0,r.kt)("a",{parentName:"li",href:"/1.5/evm_training/evmTask2"},"Deploy a Simple Ethereum Smart Contract on Polyjuice"),"."),(0,r.kt)("li",{parentName:"ul"},"If you want to obtain direct experience and prepare yourself for deploying dapps, check ",(0,r.kt)("a",{parentName:"li",href:"/1.5/evm_training/evmIntro"},"Layer 2 EVM Training"),"."),(0,r.kt)("li",{parentName:"ul"},"Information about tokens deployed on Godwoken Testnet can be found at ",(0,r.kt)("a",{parentName:"li",href:"/1.5/tokens"},"Tokens"),"."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("a",{parentName:"li",href:"/1.5/fastWithdrawal"},"Asset Management section"),", you will find more about the cross-layer operations between Nervos CKB layer 1 and Godwoken layer 2."),(0,r.kt)("li",{parentName:"ul"},"The latest changes to Godwoken can be viewed here ",(0,r.kt)("a",{parentName:"li",href:"/1.5/gwchangelog/releaseNote1.5"},"Release Notes"),"."),(0,r.kt)("li",{parentName:"ul"},"The latest changes to Godwoken Web3 can be seen at ",(0,r.kt)("a",{parentName:"li",href:"/1.5/web3changelog/web3Change1.6"},"Godwoken Web3 Release Note"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sites:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nervos Network Official Website: ",(0,r.kt)("a",{parentName:"li",href:"https://www.nervos.org/godwoken/"},"https://www.nervos.org/godwoken/")),(0,r.kt)("li",{parentName:"ul"},"Official Godwoken Docs: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.godwoken.io/"},"https://docs.godwoken.io/")),(0,r.kt)("li",{parentName:"ul"},"Instructions for Launching on Godwoken: ",(0,r.kt)("a",{parentName:"li",href:"https://startwithnervos.com/godwoken"},"https://startwithnervos.com/godwoken"))))}u.isMDXComponent=!0}}]);