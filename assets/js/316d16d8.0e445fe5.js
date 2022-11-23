"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=o,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(3117),o=(n(7294),n(3905));n(4996);const r={id:"releaseNote1.6",title:"Godwoken V1.6 Release Note"},i=void 0,l={unversionedId:"gwchangelog/releaseNote1.6",id:"gwchangelog/releaseNote1.6",title:"Godwoken V1.6 Release Note",description:"Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.6. You can check the full release notes in the Godwoken Changlog.",source:"@site/docs/gwchangelog/releaseNote1.6.md",sourceDirName:"gwchangelog",slug:"/gwchangelog/releaseNote1.6",permalink:"/gwchangelog/releaseNote1.6",draft:!1,tags:[],version:"current",frontMatter:{id:"releaseNote1.6",title:"Godwoken V1.6 Release Note"},sidebar:"sidebar2",previous:{title:"Differences Between v0 and v1",permalink:"/gwchangelog/v0difv1"},next:{title:"Godwoken Web3 V1.7 Release Note",permalink:"/web3changelog/web3Change1.7"}},p={},s=[{value:"Polyjuice",id:"polyjuice",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.6. You can check the full release notes in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),"."),(0,o.kt)("p",null,"The latest update to Godwoken v1.6 includes the following changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: add to_address to polyjuice parser in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken/pull/784"},"#784")),(0,o.kt)("p",{parentName:"li"},"Added ",(0,o.kt)("inlineCode",{parentName:"p"},"to_address")," for checking and supporting native token transfers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support non EIP-155 tx in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken/pull/777"},"#777")),(0,o.kt)("p",{parentName:"li"},"Godwoken now supports ",(0,o.kt)("inlineCode",{parentName:"p"},"EIP-155")," transactions. Due to the reuse of the chain_id field, if we deploy a different Godwoken implementation with ",(0,o.kt)("inlineCode",{parentName:"p"},"chain_id = 0"),", then a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"EIP-155")," transaction cannot be sent on-chain because Godwoken would assume the transaction as a non-EIP-155 transaction. With this pr, Godwoken accepts layer-2 transactions with ",(0,o.kt)("inlineCode",{parentName:"p"},"chain_id = 0"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Validate native token transfer raw tx and signature in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken/pull/788"},"#788")),(0,o.kt)("p",{parentName:"li"},"Related to Polyjuice ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-polyjuice/pull/173"},"#173"),", see Polyjuice updates below for details. "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"refactor: remove sentry in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken/pull/780"},"#780"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix: recover sender of non EIP-155 txs in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken/pull/790"},"#790"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix(tools): Fix for withdraw cli in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken/pull/792"},"#792")))),(0,o.kt)("h2",{id:"polyjuice"},"Polyjuice"),(0,o.kt)("p",null,"Polyjuice is an EVM-compatible executing environment built to work with the Godwoken layer-2 rollup framework, and allows Solidity-based smart contracts to run on the Nervos infrastructure."),(0,o.kt)("p",null,"Updates in the current release include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: support native token transfer in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-polyjuice/pull/173"},"#173")),(0,o.kt)("p",{parentName:"li"},"A handler is added to deal with native token transfers before accessing EVM, and defined a native token transfer transaction as follows:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to_id")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"CONTRACT_CREATOR_ID"),"."),(0,o.kt)("li",{parentName:"ul"},"only accept ",(0,o.kt)("inlineCode",{parentName:"li"},"call_kind")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"li"},"EVMC_CALL"),"."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"to_address")," to the end of the polyjuice args."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to_addrress")," should not be a contract."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: Create new account during transferring if the to_address is not registered in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-polyjuice/pull/177"},"#177")),(0,o.kt)("p",{parentName:"li"},"With this pr, a new EoA account will be created during the native token transfer if ",(0,o.kt)("inlineCode",{parentName:"p"},"to_address")," is not registered. It also fixed a test issue triggered by an update to the account recovered from godwoken.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix: g_gas_price constant is too large for its type in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-polyjuice/pull/175"},"#175"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"test: handle logs hash in post of ethereum tests in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-polyjuice/pull/174"},"#174"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"test: integrate ethereum tests in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-polyjuice/pull/172"},"#172"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fix wrong used_gas of native transfer in polyjuice_system_log in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-polyjuice/pull/179"},"#179")))))}u.isMDXComponent=!0}}]);