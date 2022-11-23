"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(3117),a=(r(7294),r(3905));r(4996);const o={id:"standards",title:"Standards"},s=void 0,i={unversionedId:"standards",id:"standards",title:"Standards",description:"SUDT",source:"@site/docs/standards.md",sourceDirName:".",slug:"/standards",permalink:"/standards",draft:!1,tags:[],version:"current",frontMatter:{id:"standards",title:"Standards"},sidebar:"sidebar2",previous:{title:"Infrastructure",permalink:"/infrastructure"},next:{title:"Structure",permalink:"/structure"}},l={},c=[{value:"SUDT",id:"sudt",level:2},{value:"ERC20",id:"erc20",level:2},{value:"ERC20 Proxy Contract",id:"erc20-proxy-contract",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sudt"},"SUDT"),(0,a.kt)("p",null,"The SUDT acronym stands for Simple User Defined Token. The SUDT standard is Nervos' first token standard, which allows for creating basic fungible tokens."),(0,a.kt)("p",null,"The SUDT standard is the Nervos equivalent of the Ethereum ERC20 standard. SUDT tokens are created on the Nervos CKB layer 1 blockchain to produce both native assets as well as wrapped from other blockchain token standards."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md"},"SUDT RFC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-miscellaneous-scripts/blob/master/c/simple_udt.c"},"SUDT Official Implementation in C")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/developer-training-course-script-examples/blob/master/contracts/sudt/src/entry.rs"},"SUDT Example Implementation in Rust"))),(0,a.kt)("h2",{id:"erc20"},"ERC20"),(0,a.kt)("p",null,"The ERC20 token standard is the first major token in the Ethereum ecosystem. This standard allows for the creation of basic fungible tokens."),(0,a.kt)("p",null,"Hundreds of thousands of ERC20 compatible tokens are deployed on the Ethereum Mainnet, representing the majority of all smart contract usage on Ethereum."),(0,a.kt)("p",null,"Nervos can also support ERC20 tokens directly using Ethereum EVM compatibility provided by the Godwoken and Polyjuice frameworks. To facilitate this, the ERC20 token resides on a layer 2 network that is connected to the Nervos CKB layer 1 blockchain. ERC20 tokens can then move back and forth between layer 1 using the ERC20 Proxy Contract, which seamlessly exchanges an ERC20 token on layer 2 with a SUDT token on layer 1."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC20 RFC"))),(0,a.kt)("h2",{id:"erc20-proxy-contract"},"ERC20 Proxy Contract"),(0,a.kt)("p",null,"The ERC20 Proxy Contract is a special smart contract written in Solidity, which is designed to run on a layer 2 network utilizing the ",(0,a.kt)("a",{parentName:"p",href:"/frameworks#godwoken"},"Godwoken")," and ",(0,a.kt)("a",{parentName:"p",href:"/frameworks#polyjuice"},"Polyjuice")," frameworks. This contract provides a way for EVM code to interact with an ERC20 token interface that is interfacing directly with Polyjuice to control SUDT tokens on Layer 2 as if they were ERC20 tokens."),(0,a.kt)("p",null,"A deposit transaction is prepared on Layer 1, which takes the SUDT tokens and sends them to Godwoken to be locked, effectively taking them out of circulation on Layer 1. Godwoken will then issue the equivalent amount of SUDT tokens on Layer 2 for the user who deposited. The ERC20 Proxy Contract can then be used to view or transfer these layer 2 SUDT tokens."),(0,a.kt)("p",null,"A withdrawal follows the same process in reverse. The ERC20 Proxy Contract is used to send the layer 2 SUDT tokens to Godwoken, where they are burned. The equivalent number of locked SUDT tokens on Layer 1 are then released back to the user."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/godwokenrises/godwoken-polyjuice/tree/main/solidity/erc20"},"Github"))))}d.isMDXComponent=!0}}]);