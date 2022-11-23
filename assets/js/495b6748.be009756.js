"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[7111],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(k,a(a({ref:t},u),{},{components:o})):n.createElement(k,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},274:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(3117),r=(o(7294),o(3905)),i=o(4996);const a={id:"overview",title:"Godwoken Overview"},l=void 0,s={unversionedId:"overview",id:"version-1.6/overview",title:"Godwoken Overview",description:"With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network.",source:"@site/versioned_docs/version-1.6/overview.md",sourceDirName:".",slug:"/overview",permalink:"/1.6/overview",draft:!1,tags:[],version:"1.6",frontMatter:{id:"overview",title:"Godwoken Overview"},sidebar:"sidebar2",previous:{title:"Developer Quick Start",permalink:"/1.6/quickStart"},next:{title:"Godwoken Public Networks",permalink:"/1.6/connectionInfo"}},c={},u=[{value:"Godwoken Public Networks",id:"godwoken-public-networks",level:2},{value:"Decentralization Roadmap",id:"decentralization-roadmap",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken"},"Godwoken")," comprises two key components: the Godwoken optimistic rollup framework and the Polyjuice EVM-compatible framework. Polyjuice serves as the backend for the Godwoken rollup framework, providing an Ethereum-compatible layer atop Nervos CKB. Polyjuice leverages the account model and the scalability provided by Godwoken, and integrates ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/evmone"},"evmone")," as the EVM engine to run Ethereum smart contracts. For more information about Polyjuice, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"godwoken-polyjuice"),"."),(0,r.kt)("p",null,"Both Godwoken and Polyjuice together forge a scalable EVM-compatible solution for Nervos, generally known as ",(0,r.kt)("strong",{parentName:"p"},"Godwoken"),"."),(0,r.kt)("p",null,"Godwoken is a suitable choice for those who wish to utilize Ethereum's advantages, including its platform, tooling, and documentation, without the downsides, such as network congestion, high gas fees, oversaturation, and scalability issues. By using Godwoken, Ethereum developers can easily port their existing DApps to Nervos and enjoy instant transactions and low fees in an Ethereum-like environment. For more information on porting Ethereum DApps to Nervos, see ",(0,r.kt)("a",{parentName:"p",href:"integration"},"Integration Guide for Ethereum Developers"),"."),(0,r.kt)("img",{src:(0,i.Z)("img/arch.png"),width:"40%"}),(0,r.kt)("p",null,"Figure 1. Architecture of Godwoken"),(0,r.kt)("h2",{id:"godwoken-public-networks"},"Godwoken Public Networks"),(0,r.kt)("p",null,"Godwoken is currently in active development. For more information on Godwoken public networks, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/tree/info"},"Godwoken info"),"."),(0,r.kt)("p",null,"With Godwoken-Kicker, you can deploy a local Godwoken v1 network in two modes, quick mode or manual-build mode. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"godwokenkicker"},"Godwoken-Kicker"),"."),(0,r.kt)("h2",{id:"decentralization-roadmap"},"Decentralization Roadmap"),(0,r.kt)("p",null,"Godwoken has a solid roadmap to incrementally evolve the Godwoken network from semi-decentralization to full decentralization."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 1 (initial launch)"),": The entire network comes with a sequencer to sort transactions. Developers can run their own Godwoken nodes in read-only mode and watch the on-chain rollup transactions to calculate and verify the rollup global state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 2"),": Introduce the permissionless challenger node, so everyone can run their Godwoken node in challenger mode. If the sequencer commits an invalid state, a challenge will be automatically processed by a random Godwoken node, depending on which node sends the challenge first. If the challenge has succeeded, the sequencer will lose the collateral asset on the layer 1 and the rollup's state will be reverted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 3"),": Introduce the permissionless full nodes. Multiple sequencer mechanisms will be investigated and explored.")))}p.isMDXComponent=!0}}]);