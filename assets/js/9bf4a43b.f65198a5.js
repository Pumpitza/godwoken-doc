"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"pCKB",title:"pCKB"},i="pCKB",c={unversionedId:"pCKB",id:"version-1.6/pCKB",title:"pCKB",description:"pCKB is a defined layer 2 sUDT token type when deploying a Godwoken chain, it is the new concept that Godwoken v1 introduced.",source:"@site/versioned_docs/version-1.6/pCKB.md",sourceDirName:".",slug:"/pCKB",permalink:"/1.6/pCKB",draft:!1,tags:[],version:"1.6",frontMatter:{id:"pCKB",title:"pCKB"},sidebar:"sidebar2",previous:{title:"Scripts",permalink:"/1.6/gwScripts"},next:{title:"Deposit and Withdrawal",permalink:"/1.6/depAndWthd"}},s={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pckb"},"pCKB"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb"},"pCKB"))," is a defined layer 2 sUDT token type when deploying a Godwoken chain, it is the new concept that Godwoken v1 introduced."),(0,a.kt)("p",null,"In Godwoken, pCKB is used to collect transaction fees, similar to the role of ETH in Ethereum. Godwoken chain uses CKB as pCKB by default, while different Godwoken chains may use different token types as pCKB."),(0,a.kt)("p",null,"pCKB, as the unit for calculating transaction fees in Godwoken, has a similar calculating method for transaction fees to that of Ethereum, i.e. , the gas for each smart contract is derived by calculation, while the transaction fee is calculated by multiplying the gas with a specified gas price. In other words, the gas price in Ethereum is calculated as ETH/gas (in wei, i.e. 10-18 ETH), while the gas price in Godwoken is calculated as pCKB/gas. When Godwoken executes a transaction, it will deduct the transaction fee using layer 2 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md"},"sUDT")," type, which is represented by ",(0,a.kt)("strong",{parentName:"p"},"pCKB"),"."),(0,a.kt)("p",null,"One thing to be noted is that pCKB has different decimals from CKB on layer 1. CKB is ",(0,a.kt)("inlineCode",{parentName:"p"},"8")," decimals on layer 1, but is ",(0,a.kt)("inlineCode",{parentName:"p"},"18")," decimals on layer 2, represented as pCKB. For more detailed about it, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/1.6/gwchangelog/v0difv1#ckb-decimals"},"CKB Decimals"),"."))}d.isMDXComponent=!0}}]);