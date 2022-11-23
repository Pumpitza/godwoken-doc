"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,d=k["".concat(i,".").concat(m)]||k[m]||u[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));n(4996);const o={id:"releaseNote1.3",title:"Godwoken V1.3 Release Note"},l=void 0,p={unversionedId:"gwchangelog/releaseNote1.3",id:"version-1.5/gwchangelog/releaseNote1.3",title:"Godwoken V1.3 Release Note",description:"The following release notes cover the most recent and major changes in Godwoken v1.3. You can also see all release notes in the Godwoken Changlog.",source:"@site/versioned_docs/version-1.5/gwchangelog/releaseNote1.3.md",sourceDirName:"gwchangelog",slug:"/gwchangelog/releaseNote1.3",permalink:"/1.5/gwchangelog/releaseNote1.3",draft:!1,tags:[],version:"1.5",frontMatter:{id:"releaseNote1.3",title:"Godwoken V1.3 Release Note"}},i={},s=[{value:"<strong>Added</strong>",id:"added",level:3},{value:"<strong>Changed</strong>",id:"changed",level:3},{value:"<strong>Fixed</strong>",id:"fixed",level:3},{value:"<strong>Others</strong>",id:"others",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following release notes cover the most recent and major changes in Godwoken v1.3. You can also see all release notes in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md"},"Godwoken Changlog"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Godwoken v1 is not an upgrade on the existing chain but is being deployed as a new vhain with tools to help users and developers migrate to the new chain.  Developers can use Godwoken v1 to switch networks to Godwoken in the same way as they use other EVM-compatible chains.")),(0,a.kt)("p",null,"The changes to Godwoken v1.3 include:"),(0,a.kt)("h3",{id:"added"},(0,a.kt)("strong",{parentName:"h3"},"Added")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: Remove error tx receipt notify. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/724"},"#724")),(0,a.kt)("p",{parentName:"li"},"  Godwoken removed the deprecated error tx receipt and associated logic.\n")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(tools): generate-config p2p network. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/734"},"#734")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p_network_config")," is included in the config generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"gw-tools generate-config"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Usage: gw-tools generate-config ... --p2p-listen <address> --p2p-dial <address> <address>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(rpc-server): get in queue requests.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/726"},"#726")),(0,a.kt)("p",{parentName:"li"},"  Added RPC method ",(0,a.kt)("inlineCode",{parentName:"p"},"gw_is_request_in_queue")," which returns status of whether a transaction or withdrawal is in a queue on the full node."))),(0,a.kt)("h3",{id:"changed"},(0,a.kt)("strong",{parentName:"h3"},"Changed")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: reject transactions has less gas than the intrinsic gas.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/725"},"#725"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: check sender's balance before execute.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/750"},"#750"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(rpc-server): check withdrawal request minimal capacity and owner lock. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/748"},"#748")))),(0,a.kt)("h3",{id:"fixed"},(0,a.kt)("strong",{parentName:"h3"},"Fixed")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: refresh readonly mem-pool when receives new mem-block. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/721"},"#721"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: read only nodes without p2p sync. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/737"},"#737"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: handle VM InvalidCycles by generate a polyjuice system log. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/729"},"#729"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix gw tools deployment ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/736"},"#736"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix(gw-tools): sudt transfer with eip712 message.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/744"},"#744"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: gw-tools create-sudt-account. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/747"},"#747"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: use mem pool state for \u201cget block\u201d RPCs.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/742"},"#742"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: mem pool state snapshot.\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/740"},"#740")))),(0,a.kt)("h3",{id:"others"},(0,a.kt)("strong",{parentName:"h3"},"Others")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat(block-producer): trace chain task run func. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/732"},"#732"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Debug intrinsic gas. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/735"},"#735"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"chore: bump rocksdb from 0.16.1 to 0.18.1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/746"},"#746"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upgrade to tentacle 0.4.0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/pull/743"},"#743")))))}u.isMDXComponent=!0}}]);