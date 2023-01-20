---
id: gasless-api
title: Gasless API
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Gas fees prevent new users from entering the Web3 world everyday. This forces new users to acquire the native token (CKB or ETH) before participating in blockchain games or exchanging tokens on a DEX, which can be challenging. The gasless feature enables developers to sponsor transaction fees for users to ensure a smooth user experience.

The gas feature is based on a simpler version of the [ERC-4337 solution](https://eips.ethereum.org/EIPS/eip-4337). To use such a feature, users sign and send a unique gasless transaction to call a specific smart contract named `Entrypoint`, `Entrypoint` will then call another smart contract named `Paymaster`, which developers deploy to check if they are willing to pay the gas fee for this transaction. The unique gasless transaction must satisfy these requirements:

- `tx.data` must be the call data of calling `Entrypoint`'s `handleOp(UserOperation calldata op)` function, which contains the target contract and the paymaster address.
- Must set `tx.gasPrice` to 0 (compatible with Metamask api)
- The `tx.to` must be set to the `Entrypoint` contract.
- `tx.paymasterAndData` contains a pay master address.
- `tx.gas` is equals to `op.callGasLimit + op.verificationGasLimit * 3`.


### Use cases

Each solves some decentralized problem. With this gasless feature, some of these dapps can be improved with solutions like:
 - DEX/Lending and rest transaction gas payments with project token (descreasing project inflation);
 - NFT minting and exchange (to lower the entry threshold for crypto gaming);


### How to use gasless transactions for your dapp

Let's say we have the entry point contract at `0x9a11f47c0729fc56d9c44c059987d40703249569`, and as a game developer, we want to pay the gas fees for some whitelist users, so we write a paymaster contract just like [this one](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/contracts/samples/GaslessDemoPaymaster.sol) and deploy it at `0x6b019795aa36dd19eb4a4d76f3b9a40239b7c19f`.

dapp frontend using ethers.js

```ts
      // define UserOp
      const userOp: UserOperationStruct = {
          callContract: realGameContract.address,
          callData: realGameContractCallData,
          callGasLimit: gasToExecuteRealGameContractCallData,
          verificationGasLimit: gasToVerifyPaymaster,
          maxFeePerGas: gasPrice,
          maxPriorityFeePerGas: gasPrice,
          paymasterAndData: "0x6b019795aa36dd19eb4a4d76f3b9a40239b7c19f" 
      }
      
      // 1. construct and send gasless transaction via native sendTransaction
      const abiCoder = new ethers.utils.AbiCoder();
      const userOp = abiCoder.encode(["tuple(address callContract, bytes callData, uint256 callGasLimit, uint256 verificationGasLimit, uint256 maxFeePerGas, uint256 maxPriorityFeePerGas, bytes paymasterAndData) UserOperation"], [userOp]);
      // first 4 bytes of keccak hash of handleOp((address,bytes,uint256,uint256,uint256,uint256,bytes))
      const fnSelector = "fb4350d8";
      // gasless payload = ENTRYPOINT_HANDLE_OP_SELECTOR + abiEncode(UserOperation)
      const payload = "0x" + fnSelector + userOp.slice(2);
      const gaslessTx = {
        from: whitelistUser.address,
        to: '0x9a11f47c0729fc56d9c44c059987d40703249569',
        data: payload,
        gasPrice: 0,
        gasLimit: 1000000,
        value: 0,
      }
      const signer = new ethers.Wallet("private key");
      const tx = await signer.sendTransaction(gaslessTx);
      await tx.wait();
      // 2. or just use ethers contract factory with EntryFactory and call directly it
      {
        // Send tx with a valid user.
        const EntryPoint = await ethers.getContractFactory("EntryPoint");
        const entrypoint = await EntryPoint.attach('0x9a11f47c0729fc56d9c44c059987d40703249569');
        const tx = await entryPoint.connect(whitelistUser).handleOp(userOp, {gasLimit: 100000, gasPrice: 0});
        await tx.wait();
      }
```

### How to configure a paymaster contract

From the previous example we have deployed a contract like [this one](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/contracts/samples/GaslessDemoPaymaster.sol). However, this contract should be configurable to work through the web3 API. To do this, please execute the following smart contract methods:
1. Execute `deposit` [method](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d83e75d152e7a58bec6d97b51221012/contracts/core/GaslessBasePaymaster.sol#L68) on `paymaster` in order to add a balance. This is required as all gasless tx costs will be covered by the balance on the `paymaster` contract.
2. Execute `addStake` [method](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d83e75d152e7a58bec6d97b51221012/contracts/core/GaslessBasePaymaster.sol#L85) in order to register your `paymaster` on the `entrypoint`. This will add `paymaster` contract allowance to perform as a `gasless provider` for your project.


### Project sample

https://gasless-nft-ui.pages.dev/ - first test the NFT minting dapp in a gasless way with payment in test tokens

Example of codebase: https://github.com/BuildClub/gassless-nft-minter

Test project token for payment - [0x882e1EA0c0f49607711108Ffe9343124ae50431E](https://gw-explorer.nervosdao.community/address/0x882e1EA0c0f49607711108Ffe9343124ae50431E)

Paymaster address - [0x33F29EA00f022dF9e72a2bc7799Ddc652792E007](https://gw-explorer.nervosdao.community/address/0x33F29EA00f022dF9e72a2bc7799Ddc652792E007)

Entrypoint address - [0x791ec459f57362256f313f5512bdb9f6d7cae308](https://gw-explorer.nervosdao.community/address/0x791ec459f57362256f313f5512bdb9f6d7cae308)

NFT address - [0x9A39d4548eECC296bA4a7d0CE7960DefC662D4Fd](https://gw-explorer.nervosdao.community/address/0x9A39d4548eECC296bA4a7d0CE7960DefC662D4Fd)
