"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[8808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=n,k=y["".concat(s,".").concat(d)]||y[d]||p[d]||a;return r?o.createElement(k,i(i({ref:t},u),{},{components:r})):o.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(3117),n=(r(7294),r(3905)),a=r(4996);const i={id:"extractPrivkey",title:"Extract a Privkey from MetaMask Wallet"},l=void 0,s={unversionedId:"extractPrivkey",id:"version-1.4/extractPrivkey",title:"Extract a Privkey from MetaMask Wallet",description:"This tutorial will show you how to extract a private key from the MetaMask wallet. This will allow you to provide it with tools and services which require it to create transactions on your behalf.",source:"@site/versioned_docs/version-1.4/extractPrivkey.md",sourceDirName:".",slug:"/extractPrivkey",permalink:"/1.4/extractPrivkey",draft:!1,tags:[],version:"1.4",frontMatter:{id:"extractPrivkey",title:"Extract a Privkey from MetaMask Wallet"},sidebar:"sidebar2",previous:{title:"Transfer pCKB on Godwoken v1",permalink:"/1.4/sendPCKB"},next:{title:"Godwoken V1.4 Release Note",permalink:"/1.4/gwchangelog/releaseNote4"}},c={},u=[{value:"1. Select the Account",id:"1-select-the-account",level:2},{value:"2. Open Account Details",id:"2-open-account-details",level:2},{value:"3. Click Export Private Key",id:"3-click-export-private-key",level:2},{value:"4. Enter Your MetaMask Password",id:"4-enter-your-metamask-password",level:2},{value:"5. Copy Your Private Key",id:"5-copy-your-private-key",level:2}],p={toc:u};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial will show you how to extract a private key from the ",(0,n.kt)("a",{parentName:"p",href:"/1.4/wallets#metamask"},"MetaMask")," wallet. This will allow you to provide it with tools and services which require it to create transactions on your behalf."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sharing your private keys with any other person or application gives them complete control of all funds on the account!")," Never provide this information for any account with real funds unless you are absolutely certain that this is something you can trust."),(0,n.kt)("p",null,"Note: If you already have MetaMask installed and use it for anything else, it is ",(0,n.kt)("strong",{parentName:"p"},"highly recommended")," you use a separate installation of MetaMask that is used only for testing purposes. This can be done by using a different profile within your browser, reinstalling MetaMask and generating a new seed phrase, or using a different web browser entirely. Failing to do so could compromise the accounts and all funds contained within your MetaMask installation."),(0,n.kt)("h2",{id:"1-select-the-account"},"1. Select the Account"),(0,n.kt)("p",null,"The first step is selecting the account that you want to export the private key from. This is done by clicking the round icon in the right top corner of MetaMask."),(0,n.kt)("img",{src:(0,a.Z)("img/metamask-export-00.png"),width:"40%"}),(0,n.kt)("h2",{id:"2-open-account-details"},"2. Open Account Details"),(0,n.kt)("p",null,"Next, open the account details for the selected account. This is done by selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Account details"),' item from the Account Options menu by clicking the "three dots" button.'),(0,n.kt)("img",{src:(0,a.Z)("img/metamask-export-01.png"),width:"40%"}),(0,n.kt)("h2",{id:"3-click-export-private-key"},"3. Click Export Private Key"),(0,n.kt)("p",null,"From the Account Details screen, click the Export Private Key button."),(0,n.kt)("img",{src:(0,a.Z)("img/metamask-export-02.png"),width:"40%"}),(0,n.kt)("h2",{id:"4-enter-your-metamask-password"},"4. Enter Your MetaMask Password"),(0,n.kt)("p",null,"Enter your MetaMask password to unlock your wallet."),(0,n.kt)("img",{src:(0,a.Z)("img/metamask-export-03.png"),width:"40%"}),(0,n.kt)("h2",{id:"5-copy-your-private-key"},"5. Copy Your Private Key"),(0,n.kt)("p",null,"The private key for your account should now be displayed in hex format. Copy this value so it can be used later."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Note: You will need to prepend "0x" to the front of your private key in order to make it usable by most applications.')),(0,n.kt)("img",{src:(0,a.Z)("img/metamask-export-04.png"),width:"40%"}))}y.isMDXComponent=!0}}]);