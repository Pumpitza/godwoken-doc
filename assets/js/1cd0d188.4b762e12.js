"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(3117),r=(n(7294),n(3905)),a=n(4996);const i={id:"tooling",title:"Tooling"},l=void 0,s={unversionedId:"tooling",id:"version-1.2-rc1/tooling",title:"Tooling",description:"CKB Node",source:"@site/versioned_docs/version-1.2-rc1/tooling.md",sourceDirName:".",slug:"/tooling",permalink:"/1.2-rc1/tooling",draft:!1,tags:[],version:"1.2-rc1",frontMatter:{id:"tooling",title:"Tooling"},sidebar:"sidebar2",previous:{title:"Structure",permalink:"/1.2-rc1/structure"},next:{title:"Wallets",permalink:"/1.2-rc1/wallets"}},c={},p=[{value:"CKB Node",id:"ckb-node",level:2},{value:"CKB Indexer",id:"ckb-indexer",level:2},{value:"CKB-CLI",id:"ckb-cli",level:2},{value:"Tippy",id:"tippy",level:2},{value:"CKB.tools",id:"ckbtools",level:2},{value:"SUDT-CLI",id:"sudt-cli",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ckb-node"},"CKB Node"),(0,r.kt)("p",null,"Nervos Network is a decentralized and permissionless multi-layer blockchain ecosystem. The Nervos blockchain, also known as the Common Knowledge Base, is the bottom-most layer in the Nervos ecosystem. It serves as a foundation to build on and provides trust to all layers built on top. It is designed to maximize decentralization while remaining minimal, flexible, and secure. Its main purpose is the reliable preservation of any data and assets stored within it."),(0,r.kt)("p",null,"The focus of layer 1 is security and decentralization. Layer 1 provides a source of trust to all layers above it. Layer 2 focuses on scalability, providing high throughput with millions of transactions per second. The two layers function together to achieve higher levels of decentralization, security, and scalability than are possible on a single layer."),(0,r.kt)("p",null,"The CKB node software is what powers the layer 1 blockchain. It handles the aspects of networking, consensus, smart contract execution, data storage, and data retrieval. CKB nodes are run by all participants of the network that need RPC access to the information contained within the blockchain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/releases"},"Download")),(0,r.kt)("li",{parentName:"ul"},"Setup Guides for [",(0,r.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/mainnet"},"Mainnet"),"] [",(0,r.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/testnet"},"Testnet"),"] [",(0,r.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/devchain"},"Devnet"),"] [",(0,r.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker"},"Docker"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/reference/rpc"},"CKB JSON-RPC Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md"},"CKB JSON-RPC Documentation"))),(0,r.kt)("img",{src:(0,a.Z)("img/tool-ckb.png"),width:"60%"}),(0,r.kt)("h2",{id:"ckb-indexer"},"CKB Indexer"),(0,r.kt)("p",null,"The CKB Indexer handles the organization (indexing) of specific pieces of blockchain data which are commonly needed for dApp development. The CKB Indexer runs besides the CKB node software to add additional functionality for developers that is not required by the CKB node software for consensus."),(0,r.kt)("p",null,"In some other blockchain node software, the functionality of the indexer included with the main node software. However, this adds a significant amount of overhead to both the disk space requirements and the processing of each block. This, in turn, increases the resources required to run a basic node on the network."),(0,r.kt)("p",null,"Nervos splits this functionality into two distinctly different pieces of software. This keeps the system requirements of the CKB node software at a bare minimum, which reduces the burden necessary to run a full node, and allows more people to run one to encourage higher levels of decentralization. Developers can optionally install the CKB Indexer when they require more functionality."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-indexer"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-indexer/releases"},"Download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-indexer/blob/master/README.md"},"Basic Usage Instructions"))),(0,r.kt)("h2",{id:"ckb-cli"},"CKB-CLI"),(0,r.kt)("p",null,"CKB-CLI is a command line tool that is used with a CKB node to perform common actions such as creating accounts, sending CKBytes, and querying the blockchain for transaction data."),(0,r.kt)("p",null,"CKB-CLI can be downloaded separately, but it is also included with the native CKB node software."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-cli"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-cli/releases"},"Download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-cli/blob/develop/README.md"},"Documentation"))),(0,r.kt)("img",{src:(0,a.Z)("img/tool-ckb-cli.png"),width:"60%"}),(0,r.kt)("h2",{id:"tippy"},"Tippy"),(0,r.kt)("p",null,"Tippy is a tool for managing instances of CKB nodes and CKB Indexers using a desktop GUI interface. Tippy allows you to create Mainnet, Testnet, and Devnet chains with just a few clicks."),(0,r.kt)("p",null,"Tippy is very useful for developers to manage multiple Devnet chains quickly without having to spend time moving data around on the command line."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/tippy"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/tippy/releases"},"Download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/tippy/blob/develop/README.md"},"Documentation"))),(0,r.kt)("img",{src:(0,a.Z)("img/tool-tippy.png"),width:"60%"}),(0,r.kt)("h2",{id:"ckbtools"},"CKB.tools"),(0,r.kt)("p",null,"CKB.tools is an online collection of free development tools created for use with Nervos Network."),(0,r.kt)("p",null,"The current tools available include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Address Tool - A tool to view the components and attributes of Nervos CKB addresses."),(0,r.kt)("li",{parentName:"ul"},"Bootstrap - Recent snapshots of the Testnet chain data to speed up the initial sync."),(0,r.kt)("li",{parentName:"ul"},"SUDT Tool - A tool to create SUDT tokens on the Testnet using MetaMask.")),(0,r.kt)("p",null,"All tools rely on the MetaMask wallet exclusively, and run completely in the browser. No other dependencies are needed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ckb.tools/"},"Official Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/ckb-tools"},"Github"))),(0,r.kt)("img",{src:(0,a.Z)("img/tool-ckb-tools.png"),width:"60%"}),(0,r.kt)("h2",{id:"sudt-cli"},"SUDT-CLI"),(0,r.kt)("p",null,"SUDT-CLI is a tool that allows developers to quickly issue ",(0,r.kt)("a",{parentName:"p",href:"/1.2-rc1/standards#SUDT"},"SUDT")," tokens from the command line. SUDT-CLI does not require any external tools or software to be used."),(0,r.kt)("p",null,"Instead of relying on an external wallet, users must provide a private key in the form of a hex string. This can be a private key generated from an existing wallet, or one that is randomly generated. You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://ckb.tools/generator"},"Generator Tool")," on ",(0,r.kt)("a",{parentName:"p",href:"#ckbtools"},"CKB.tools")," if you need a randomly generated one for use on a Testnet or Devnet."),(0,r.kt)("p",null,"SUDT-CLI supports operation on the public Mainnet and Testnet, and private Devnets including those configured to work with Godwoken. SUDT-CLI is designed to be a tool for developers while actively developing and testing. It is not intended to be utilized by dApps to issue SUDT tokens. All dApps should always rely on libraries like ",(0,r.kt)("a",{parentName:"p",href:"/1.2-rc1/frameworks#pw-sdk"},"PW-SDK")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos"},"Lumos")," to do so."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/sudt-cli"},"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jordanmack/sudt-cli/releases"},"Download"))),(0,r.kt)("img",{src:(0,a.Z)("img/tool-sudt-cli.png"),width:"60%"}))}u.isMDXComponent=!0}}]);