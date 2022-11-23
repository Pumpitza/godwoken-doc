"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[6671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,y=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(3117),a=(n(7294),n(3905));n(4996);const o={id:"layer2Account",title:"Layer 2 Account in Godwoken"},i=void 0,c={unversionedId:"layer2Account",id:"version-1.6/layer2Account",title:"Layer 2 Account in Godwoken",description:"Godwoken v1 introduced the registry and registry address, which can be seen as alias mechanisms for layer 2 accounts.",source:"@site/versioned_docs/version-1.6/layer2Account.md",sourceDirName:".",slug:"/layer2Account",permalink:"/1.6/layer2Account",draft:!1,tags:[],version:"1.6",frontMatter:{id:"layer2Account",title:"Layer 2 Account in Godwoken"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Godwoken v1 introduced the registry and registry address, which can be seen as alias mechanisms for layer 2 accounts. "),(0,a.kt)("p",null,"A layer 2 account can be referenced by an ID or a script (usually a hash of a script). However, in some environments, it is also required to access an account by an alias. For example, in the EVM environment, there is no such thing as a Godwoken ID or script. Therefore, access to an account can only be made through an ETH address."),(0,a.kt)("p",null,"In this case, a registry is an account. Alias mappings are stored in the key-value storage of the registry account. The registry address is encoded as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(registry ID 4 bytes) | (alias address length 4 bytes) | (alias address n bytes)\n\n")),(0,a.kt)("p",null,"In Godwoken, every layer 2 account is a tuple of the ",(0,a.kt)("inlineCode",{parentName:"p"},"(ID, L1 script)")," concept. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," is an auto-incrementing number, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"L1 script")," is the CKB core data structure unique as to each layer 2 account. ",(0,a.kt)("inlineCode",{parentName:"p"},"script"),", i.e. the CKB core data structure is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/* https://github.com/nervosnetwork/ckb/blob/develop/util/types/schemas/blockchain.mol */\ntable Script {\n    code_hash:      Byte32,\n    hash_type:      byte,\n    args:           Bytes,\n}\n\n")),(0,a.kt)("p",null,"This structure indicates the script that will be loaded when validating an L1 transaction. And, Godwoken re-used this structure on layer 2, in which:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code_hash - code_hash")," indicates the executable binary used for verifying the layer 2 transactions. If a layer 2 account represents an EVM contract, the ",(0,a.kt)("inlineCode",{parentName:"li"},"script.code_hash")," of that account will point to the binary file that can verify the EVM transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hash_type - hash_type")," shapes the way CKB loa ds the script binary, which is fixed to ",(0,a.kt)("inlineCode",{parentName:"li"},"HashType::Type")," in the layer 2 account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args - args")," is used to set the script initial args. The first 32 bytes are set to ",(0,a.kt)("inlineCode",{parentName:"li"},"rollup_script_hash")," in Godwoken to distinguish between accounts from different rollups.")),(0,a.kt)("p",null,"An account on layer 2 is an EOA, or a contract is determined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"code_hash")," of that account. If the script assumes the account is a receiver of transactions invariably, then the account is a contract. If the script assumes the account is the sender of a transaction, then the account is an EOA. The code in the script is expected to perform contract logic checks or signature checks based on the assumptions."),(0,a.kt)("p",null,"Currently, Godwoken v1 has implemented one registry, the ETH registry. An ETH address alias will be created automatically for accounts created by deposit."))}p.isMDXComponent=!0}}]);