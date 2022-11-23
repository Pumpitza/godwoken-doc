"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,u=k["".concat(p,".").concat(m)]||k[m]||d[m]||o;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(3117),a=(n(7294),n(3905)),o=n(4996);const l={slug:"/",id:"overview",title:"Overview",sidebar_label:"Overview"},i=void 0,p={unversionedId:"overview",id:"version-0.10.4/overview",title:"Overview",description:"Godwoken is a layer 2 rollup framework that provides an abstract account model and abstract layer 2 transactions atop Nervos CKB.",source:"@site/versioned_docs/version-0.10.4/overview.md",sourceDirName:".",slug:"/",permalink:"/0.10.4/",draft:!1,tags:[],version:"0.10.4",frontMatter:{slug:"/",id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"sidebar2",next:{title:"Decentralization Roadmap",permalink:"/0.10.4/decentralizationRoadmap"}},s={},c=[{value:"Godwoken Public Networks",id:"godwoken-public-networks",level:2},{value:"Current Version",id:"current-version",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken"},"Godwoken")," is a layer 2 rollup framework that provides an abstract account model and abstract layer 2 transactions atop Nervos CKB."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"Polyjuice")," is an Ethereum compatible layer designed upon the Godwoken account model. Godwoken comes together with Polyjuice giving developers the ability to seamlessly deploy and run Ethereum contracts."),(0,a.kt)("img",{src:(0,o.Z)("img/arch.png"),width:"40%"}),(0,a.kt)("p",null,"Figure 1. Architecture of Godwoken"),(0,a.kt)("h2",{id:"godwoken-public-networks"},"Godwoken Public Networks"),(0,a.kt)("p",null,"Testnet and Mainnet are provided for deploying Ethereum DApps to CKB."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-testnet/tree/master/testnet"},"Testnet")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RPC URL: ",(0,a.kt)("a",{parentName:"li",href:"https://godwoken-testnet-web3-rpc.ckbapp.dev/"},"https://godwoken-testnet-web3-rpc.ckbapp.dev/")),(0,a.kt)("li",{parentName:"ul"},"Chain ID: 71393"),(0,a.kt)("li",{parentName:"ul"},"Websocket RPC URL: ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws"),(0,a.kt)("li",{parentName:"ul"},"Explorer: ",(0,a.kt)("a",{parentName:"li",href:"https://aggron.gwscan.com/"},"https://aggron.gwscan.com/")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-testnet/tree/master/mainnet"},"Mainnet")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RPC URL: ",(0,a.kt)("a",{parentName:"p",href:"https://mainnet.godwoken.io/rpc"},"https://mainnet.godwoken.io/rpc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Chain ID: 71394")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Websocket RPC URL: ",(0,a.kt)("a",{parentName:"p",href:"https://mainnet.godwoken.io/ws"},"https://mainnet.godwoken.io/ws"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Explorer: ",(0,a.kt)("a",{parentName:"p",href:"https://www.gwscan.com/"},"https://www.gwscan.com/")))))),(0,a.kt)("p",null,"A Godwoken network can also be deployed locally. For more information, see the sections of Deployment."),(0,a.kt)("h2",{id:"current-version"},"Current Version"),(0,a.kt)("p",null,"The current version available is the ",(0,a.kt)("strong",{parentName:"p"},"v0.10.4"),". For more information refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-docker-prebuilds/releases/tag/v0.10.4"},"godwoken-docker-prebuilds"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"About Godwoken Beta")),(0,a.kt)("p",null,"It is the responsible way to make Godwoken available while we keep up improving the system before the official release.\nHere is what you can do with Godwoken beta:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"features"),(0,a.kt)("th",{parentName:"tr",align:"center"},"maintainer"),(0,a.kt)("th",{parentName:"tr",align:"center"},"developer"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"deploy contract"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"trusted*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"deploy ERC20 proxy contract"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"run full nodes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"run readonly nodes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes**")))),(0,a.kt)("p",null,"During the Godwoken beta phase, the deploy contract feature is only open to developers allowed on the list. We need to upgrade the Godwoken beta or coordinate with developers in case of emergency. Developers or teams are welcome to participate in the Godwoken beta anyways."),(0,a.kt)("p",null,"Godwoken beta is limited to the following design choices:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An optimistic rollup-based design will be used"),(0,a.kt)("li",{parentName:"ol"},"A single sequencer sort transactions and issue blocks")),(0,a.kt)("p",null,"Beware of Scams and Rugs: Nervos is a permissionless platform. Anybody can deploy an instant of Godwoken. Users and developers must interact with the instant that they can trust."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nervos","\xa0","Layer","\xa0","2 EVM","\xa0","Training"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nervos.gitbook.io/layer-2-evm/"},"https://nervos.gitbook.io/layer-2-evm/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nervos","\xa0","Document","\xa0","Website"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.nervos.org/"},"https://docs.nervos.org/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken","\xa0","Basics"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://talk.nervos.org/t/introducing-godwoken-a-missing-piece-of-the-cell-model/4464?_360safeparam=13594453"},"Introducing Godwoken - A missing piece of the cell model")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://medium.com/nervosnetwork/towards-ckb-style-lego-pieces-polyjuice-on-godwoken-cbc935d77abf"},"Towards CKB style Lego pieces: Polyjuice on Godwoken"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Source","\xa0","Code"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken"},"https://github.com/nervosnetwork/godwoken"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken-Kicker"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/RetricSu/godwoken-kicker"},"Godwoken-Kicker: one line command to start godwoken-polyjuice chain"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ethereum","\xa0","RPC","\xa0"," (web3","\xa0","RPC)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://geth.ethereum.org/docs/rpc/server"},"Ethereum RPC (web3 RPC)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gitcoin","\xa0","Hackathon"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://github.com/Kuzirashi/gw-gitcoin-instruction"},"Godwoken Gitcoin Instruction")),(0,a.kt)("li",null,(0,a.kt)("a",{parentName:"td",href:"https://gitcoin.co/hackathon/nervos/onboard"},"NERVOS - BROADEN THE SPECTRUM"))))))))}k.isMDXComponent=!0}}]);