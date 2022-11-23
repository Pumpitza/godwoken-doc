"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[1486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(3117),r=(a(7294),a(3905));a(4996);const o={id:"evmTask3",title:"3. Issue a Smart Contract Call to the Deployed Smart Contract"},i=void 0,l={unversionedId:"evm_training/evmTask3",id:"version-1.6/evm_training/evmTask3",title:"3. Issue a Smart Contract Call to the Deployed Smart Contract",description:"In this task, we will learn how to make function calls to the smart contract deployed in the previous task. We will provide some simple example code that uses the popular Web3.js library to do so. This code will allow you to interact with your smart contract, which is running on Nervos' Layer 2 in a nearly identical way to if it was running on Ethereum.",source:"@site/versioned_docs/version-1.6/evm_training/evmTask3.md",sourceDirName:"evm_training",slug:"/evm_training/evmTask3",permalink:"/1.6/evm_training/evmTask3",draft:!1,tags:[],version:"1.6",frontMatter:{id:"evmTask3",title:"3. Issue a Smart Contract Call to the Deployed Smart Contract"},sidebar:"sidebar2",previous:{title:"2. Deploy a Simple Ethereum Smart Contract on Polyjuice",permalink:"/1.6/evm_training/evmTask2"},next:{title:"4. Use Force Bridge to Deposit Tokens from Ethereum",permalink:"/1.6/evm_training/evmTask4"}},s={},c=[{value:"Task Instructions",id:"task-instructions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Prepare the Smart Contract Address and ABI",id:"1-prepare-the-smart-contract-address-and-abi",level:3},{value:"2. Prepare and Run the Example Code to Call the Smart Contract",id:"2-prepare-and-run-the-example-code-to-call-the-smart-contract",level:3},{value:"Private Key",id:"private-key",level:4},{value:"ABI",id:"abi",level:4},{value:"Contract Address",id:"contract-address",level:4},{value:"Replace the Read Function Name",id:"replace-the-read-function-name",level:4},{value:"Replace the Write Function Name",id:"replace-the-write-function-name",level:4},{value:"Run the Script",id:"run-the-script",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this task, we will learn how to make function calls to the smart contract deployed in the previous task. We will provide some simple example code that uses the popular Web3.js library to do so. This code will allow you to interact with your smart contract, which is running on Nervos' ",(0,r.kt)("a",{parentName:"p",href:"/1.6/structure#layer-1--layer-2"},"Layer 2")," in a nearly identical way to if it was running on Ethereum."),(0,r.kt)("p",null,"Your smart contract should operate just like it would on Ethereum, but in actuality, it will be running in an EVM environment provided by ",(0,r.kt)("a",{parentName:"p",href:"/1.6/frameworks#polyjuice"},"Polyjuice"),". When combined with ",(0,r.kt)("a",{parentName:"p",href:"/1.6/frameworks#godwoken"},"Godwoken"),", which provides a Layer 2 solution with optimistic rollups, total throughput performance is significantly higher. This means that all users will experience dramatically lower fees and more reliable transaction confirmation than if they were using Ethereum."),(0,r.kt)("h2",{id:"task-instructions"},"Task Instructions"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin on this task you must complete the ",(0,r.kt)("a",{parentName:"p",href:"/1.6/evm_training/evmTask1"},"first")," and ",(0,r.kt)("a",{parentName:"p",href:"/1.6/evm_training/evmTask2"},"second")," tasks. If you have not completed them, please do so now."),(0,r.kt)("p",null,"You will need the private key from the ",(0,r.kt)("strong",{parentName:"p"},"Ethereum")," address you used in the previous task. Make sure this is Ethereum private key for Layer 2, not the private key from your Nervos CKB Layer 1 address. If you do not have this, you can follow the instructions in ",(0,r.kt)("a",{parentName:"p",href:"/1.6/evm_training/evmTask5"},"this tutorial")," to extract your private key from MetaMask."),(0,r.kt)("p",null,"This task requires the Code Examples repo (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/layer2-evm-documentation"},"layer2-evm-documentation"),") which was set up in ",(0,r.kt)("a",{parentName:"p",href:"/1.6/evm_training/evmTask2#2.-clone-and-setup-the-code-examples-repository"},"task 2"),". If you do not have this repo available for any reason, please set it up now."),(0,r.kt)("h3",{id:"1-prepare-the-smart-contract-address-and-abi"},"1. Prepare the Smart Contract Address and ABI"),(0,r.kt)("p",null,'In order to execute a function call on a smart contract, it must be deployed, and you must have the ABI that was generated when the code was originally compiled. "ABI" stands for Application Binary Interface, which contains the information an application requires to interface and call functions on the smart contract requires.'),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/1.6/evm_training/evmTask2"},"previous task"),", you compiled and deployed an Ethereum smart contract. You may be able to reuse that smart contract for this task. If it is no longer available, please revisit the ",(0,r.kt)("a",{parentName:"p",href:"/1.6/evm_training/evmTask2"},"previous task")," and complete it again."," "),(0,r.kt)("p",null,"The example smart contract from the previous task is ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleStorage.sol"),", and the corresponding ABI value can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"code-examples/2-deploy-contract/artifacts/contracts/SimpleStorage.sol/SimpleStorage.json")," after the contract is compiled. Below is the ABI value which has been extracted from this file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "inputs": [],\n      "stateMutability": "payable",\n      "type": "constructor"\n    },\n    {\n      "inputs": [\n        {\n          "internalType": "uint256",\n          "name": "x",\n          "type": "uint256"\n        }\n      ],\n      "name": "set",\n      "outputs": [],\n      "stateMutability": "payable",\n      "type": "function"\n    },\n    {\n      "inputs": [],\n      "name": "get",\n      "outputs": [\n        {\n          "internalType": "uint256",\n          "name": "",\n          "type": "uint256"\n        }\n      ],\n      "stateMutability": "view",\n      "type": "function"\n    }\n]\n')),(0,r.kt)("p",null,"The SimpleStorage contract has also been deployed to Testnet at the address below. You can optionally use it for testing purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0xd4A8b3018f0c79f6BD3375C89a5Db47ca11A1C35\n")),(0,r.kt)("h3",{id:"2-prepare-and-run-the-example-code-to-call-the-smart-contract"},"2. Prepare and Run the Example Code to Call the Smart Contract"),(0,r.kt)("p",null,"Next, we will use the example code to make a function call in your smart contract. Open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"code-examples/3-call-contract/index.js")," in an editor of your choosing, and find the ",(0,r.kt)("inlineCode",{parentName:"p"},"readCall()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"writeCall()")," functions."),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"readCall()")," will read a value from the smart contract without a state change. This does not require a transaction because no data is changing. The ",(0,r.kt)("inlineCode",{parentName:"p"},"writeCall()")," function will write a new value to your smart contract. A transaction will be required because state changes can only occur through transactions. This behavior is the same as on the Ethereum chain."),(0,r.kt)("p",null,"Next, you need to update the values in ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," to match your private keys and smart contract."),(0,r.kt)("h4",{id:"private-key"},"Private Key"),(0,r.kt)("p",null,"The first thing you will need to do is update ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," with your Ethereum private key. This private key will be used to make the function calls, and it should be the same Ethereum private key that funds were added to in the previous tasks. Make sure you use your ",(0,r.kt)("strong",{parentName:"p"},"Ethereum")," private key for Layer 2, not your Nervos CKB Layer 1 private key. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_ETHEREUM_PRIVATE_KEY>")," with this value. ",(0,r.kt)("strong",{parentName:"p"},'Always make sure your private key is prefixed with "0x".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ACCOUNT_PRIVATE_KEY = '<YOUR_ETHEREUM_PRIVATE_KEY>';\n")),(0,r.kt)("h4",{id:"abi"},"ABI"),(0,r.kt)("p",null,"Next, add your contract ABI to the script by replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_CONTRACT_ABI>")," with the ABI value from the JSON file which was generated during compilation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTRACT_ABI")," constant is expecting an array with your ABI items. Make sure this is a data structure, just like it is in ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleStorage.json"),", and does not get input as a string.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const CONTRACT_ABI = [<YOUR_CONTRACT_ABI>]; // Array\n")),(0,r.kt)("h4",{id:"contract-address"},"Contract Address"),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_CONTRACT_ADDRESS>")," with the address of the Ethereum contract you will call. This value should be a hex string that will be returned after deploying the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const CONTRACT_ADDRESS = '<YOUR_CONTRACT_ADDRESS>';\n")),(0,r.kt)("h4",{id:"replace-the-read-function-name"},"Replace the Read Function Name"),(0,r.kt)("p",null,"Locate ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_READ_FUNCTION_NAME>")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"readCall()")," function. This must be replaced with function name from your contract that is used for reading."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const callResult = await contract.methods.<YOUR_READ_FUNCTION_NAME>().call({\n  from: account.address\n});\n")),(0,r.kt)("h4",{id:"replace-the-write-function-name"},"Replace the Write Function Name"),(0,r.kt)("p",null,"Locate ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_WRITE_FUNCTION_NAME>")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"writeCall()")," function. This must be replaced with function name from your contract that is used for writing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const callResult = await contract.methods.<YOUR_WRITE_FUNCTION_NAME>().call({\n  from: account.address,\n  gas: 6000000\n});\n")),(0,r.kt)("h4",{id:"run-the-script"},"Run the Script"),(0,r.kt)("p",null,"After having replaced all values, use the following command in the console to execute the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/projects/layer2-evm-documentation/code-examples/3-call-contract\nnode index.js\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c node index.js\n\nCalling contract...\nRead call result: 123\nWrite call transaction hash: 0xaea90a808e87d838008b12fb15e83651ed7603ffce0997e33f13d9a17345142b\nWrite call transaction receipt:  {\n  transactionHash: '0xaea90a808e87d838008b12fb15e83651ed7603ffce0997e33f13d9a17345142b',\n  transactionIndex: 0,\n  blockHash: '0xd1c09e906f1ab9ab2f8f2d949dffe2b54a918fcd2509ebe6654ad8b94a9f6c69',\n  blockNumber: 26767,\n  from: '0xd173313a51f8fc37bcf67569b463abd89d81844f',\n  to: '0xd4a8b3018f0c79f6bd3375c89a5db47ca11a1c35',\n  gasUsed: 20374,\n  cumulativeGasUsed: 20374,\n  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  contractAddress: null,\n  status: true,\n  events: {}\n}\nRead call result: 3332\n")),(0,r.kt)("p",null,"If you've seen transaction hash and the transaction receipt, then congratulations! You have successfully issued a smart contract write call on Nervos Layer 2."))}u.isMDXComponent=!0}}]);