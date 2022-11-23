"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[6892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(3117),o=(n(7294),n(3905));n(4996);const i={id:"evmPrep",title:"Setup and Requirements"},l=void 0,a={unversionedId:"evm_training/evmPrep",id:"version-1.6/evm_training/evmPrep",title:"Setup and Requirements",description:"Supported Architectures",source:"@site/versioned_docs/version-1.6/evm_training/evmPrep.md",sourceDirName:"evm_training",slug:"/evm_training/evmPrep",permalink:"/1.6/evm_training/evmPrep",draft:!1,tags:[],version:"1.6",frontMatter:{id:"evmPrep",title:"Setup and Requirements"},sidebar:"sidebar2",previous:{title:"Nervos' Layer 2 EVM Training",permalink:"/1.6/evm_training/evmIntro"},next:{title:"1. Create account on the EVM Layer 2 Testnet",permalink:"/1.6/evm_training/evmTask1"}},s={},p=[{value:"Supported Architectures",id:"supported-architectures",level:2},{value:"Supported Environments",id:"supported-environments",level:2},{value:"Prerequisite Development Software",id:"prerequisite-development-software",level:2},{value:"Prerequisite Wallet Software",id:"prerequisite-wallet-software",level:2},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Ubuntu 20.04 (Native or Windows 10 + WSL2)",id:"ubuntu-2004-native-or-windows-10--wsl2",level:3},{value:"Build Tools + Git + Curl + 7zip + Unzip",id:"build-tools--git--curl--7zip--unzip",level:4},{value:"Node.js",id:"nodejs",level:4},{value:"Python 2.7.x",id:"python-27x",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Docker",id:"docker",level:4},{value:"MacOS (10.13+)",id:"macos-1013",level:3},{value:"Build Tools + Git",id:"build-tools--git",level:4},{value:"Curl",id:"curl",level:4},{value:"7zip",id:"7zip",level:4},{value:"Node.js",id:"nodejs-1",level:4},{value:"Python 2.7.x",id:"python-27x-1",level:4},{value:"Yarn",id:"yarn-1",level:4},{value:"Docker",id:"docker-1",level:4},{value:"Windows 10 + PowerShell",id:"windows-10--powershell",level:3},{value:"Checking Your Node.js and Yarn Versions",id:"checking-your-nodejs-and-yarn-versions",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"supported-architectures"},"Supported Architectures"),(0,o.kt)("p",null,"The tooling currently supports the Intel-compatible x86","_","64 architecture and ARM (e.g. M1 Macs)."),(0,o.kt)("h2",{id:"supported-environments"},"Supported Environments"),(0,o.kt)("p",null,"The following operating systems are officially supported. Other operating systems may also be compatible, but have not officially been tested for compatibility by our teams."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com"},"Ubuntu Linux 20.04")," (Desktop or Server edition)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.apple.com/macos/"},"MacOS")," (Big Sur 11.0+)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/windows"},"Windows 10")," + ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/about"},"WSL2")," (Ubuntu 20.04 virtualized)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/windows"},"Windows 10")," + ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/scripting/overview"},"PowerShell"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Throughout most of our demos and walkthroughs, Ubuntu Linux 20.04 is used. This is the preferred platform by most developers.")),(0,o.kt)("h2",{id:"prerequisite-development-software"},"Prerequisite Development Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build Tools"),(0,o.kt)("li",{parentName:"ul"},"Curl"),(0,o.kt)("li",{parentName:"ul"},"7zip (optional)"),(0,o.kt)("li",{parentName:"ul"},"Unzip (optional)"),(0,o.kt)("li",{parentName:"ul"},"Git"),(0,o.kt)("li",{parentName:"ul"},"Node.js 16.13.x (LTS)"),(0,o.kt)("li",{parentName:"ul"},"Python 2.7.x"),(0,o.kt)("li",{parentName:"ul"},"Yarn"),(0,o.kt)("li",{parentName:"ul"},"Docker")),(0,o.kt)("h2",{id:"prerequisite-wallet-software"},"Prerequisite Wallet Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"MetaMask"))),(0,o.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,o.kt)("h3",{id:"ubuntu-2004-native-or-windows-10--wsl2"},"Ubuntu 20.04 (Native or Windows 10 + WSL2)"),(0,o.kt)("h4",{id:"build-tools--git--curl--7zip--unzip"},"Build Tools + Git + Curl + 7zip + Unzip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo apt install build-essential git curl p7zip-full unzip\n")),(0,o.kt)("h4",{id:"nodejs"},"Node.js"),(0,o.kt)("p",null,"The default version of Node.js included with Ubuntu 20.04 is v10.19.0, and this is not sufficient."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For these tasks, version 16.13.x is needed. Versions lower than this may not work.")," This can be installed using NVM (Node Version Manager), or the normal Node.js installation instructions. We recommend using NVM because it allows you to change between any version of Node.js quickly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM Install")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodesource/distributions/blob/master/README.md#debinstall"},"Node.js Install"))),(0,o.kt)("h4",{id:"python-27x"},"Python 2.7.x"),(0,o.kt)("p",null,"Ubuntu 20.04 ships with Python 3.8.x installed, but Python 2.7.x is still available for compatibility with old tooling using the ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo apt install python\n")),(0,o.kt)("h4",{id:"yarn"},"Yarn"),(0,o.kt)("p",null,"Yarn can easily be installed using NPM once Node.js is installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm i -g yarn\n")),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Docker will be used for running the Solidity compiler to compile smart contracts. You can find information on how to install it on the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker website"),'. If you\'re using Windows + Windows Subsystem For Linux it will be the easiest if you download and install the official "Docker for Windows" desktop application. It makes using Docker easy thanks to the graphical interface.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The current user must have permission to manage Docker instances. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"How to manage Docker as a non-root user"),".")),(0,o.kt)("h3",{id:"macos-1013"},"MacOS (10.13+)"),(0,o.kt)("h4",{id:"build-tools--git"},"Build Tools + Git"),(0,o.kt)("p",null,"Download and install the Xcode Command Line Tools from ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/technotes/tn2339/"},"developer.apple.com"),"."),(0,o.kt)("h4",{id:"curl"},"Curl"),(0,o.kt)("p",null,"Curl should be installed by default on recent versions of macOS."),(0,o.kt)("h4",{id:"7zip"},"7zip"),(0,o.kt)("p",null,"There are several decompressors available for macOS that can handle 7z files. Still, we recommend ",(0,o.kt)("inlineCode",{parentName:"p"},"p7zip")," since it will be fully compatible with our scripts. This can be installed using ",(0,o.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/p7zip"},"Homebrew"),"."),(0,o.kt)("h4",{id:"nodejs-1"},"Node.js"),(0,o.kt)("p",null,"Node.js can be installed on macOS using NVM, or the Node.js installer. ",(0,o.kt)("strong",{parentName:"p"},"For these tasks, version 16.13.x is needed. Versions lower than this may not work.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM Install")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js Installer"))),(0,o.kt)("h4",{id:"python-27x-1"},"Python 2.7.x"),(0,o.kt)("p",null,"To install Python 2.7.x on macOS, please visit the official Python ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-2718/"},"download")," page."),(0,o.kt)("h4",{id:"yarn-1"},"Yarn"),(0,o.kt)("p",null,"Yarn can easily be installed using NPM once Node.js is installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm i -g yarn\n")),(0,o.kt)("h4",{id:"docker-1"},"Docker"),(0,o.kt)("p",null,"Docker will be used for running the Solidity compiler to compile smart contracts. You can find information on how to install it from the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker website"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The current user must have permission to manage Docker instances. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"How to manage Docker as a non-root user"),".")),(0,o.kt)("h3",{id:"windows-10--powershell"},"Windows 10 + PowerShell"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node-gyp#on-windows"},"node-gyp dependencies")),(0,o.kt)("li",{parentName:"ol"},"Docker or ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Docker Desktop"))),(0,o.kt)("h2",{id:"checking-your-nodejs-and-yarn-versions"},"Checking Your Node.js and Yarn Versions"),(0,o.kt)("p",null,"One of the most common causes of errors is having the incorrect version of Node.js or Yarn. These tasks specifically require Node.js v16.x.x, and a recent version of Yarn. You can check these versions using the commands below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ node -v\nv16.13.0\n$ yarn -v\n1.22.11\n")))}d.isMDXComponent=!0}}]);