---
sidebar_position: 2
---

# Overview

## ✨ Features

### Flow emulator
Configure and run managed [flow emulator](https://github.com/onflow/flow-emulator) projects or start your own emulator instance on localhost.

### Inspect blockchain
Flowser allows you to inspect the current state of the flow blockchain.
Every new change is automatically detected and displayed in the UI.

You can view & search thought the following objects:
- **logs**
- **accounts**
- **blocks**
- **transactions**
- **contracts**
- **events**

### Dev wallet
Flowser natively supports [fcl-dev-wallet](https://github.com/onflow/fcl-dev-wallet) tool for developer convenience.
You can log in using a default service account and send arbitrary transaction directly within flowser UI.

### Rest API

Flowser backend exposes a Restfull API, which is defined in [`backend/openapi.json`](backend/openapi.json) file that conforms to [OpenAPI](https://www.openapis.org/) specification.

## 💡 Key Concepts

Flowser is a tool that in its core helps you with managing the flow emulator and inspecting the current blockchain state.

### Data sourcing

All the interaction between Flowser and Flow blockchain is handled by the [Flow client library (fcl)](https://docs.onflow.org/fcl/).

Fcl provides a single shared interface for interacting with any type of Flow blockchain network (testnet, mainnet, emulator,...). Because of that, Flowser has the ability to aggregate data from any Flow data source and currently supports Testnet and local Emulator blockchains.

> See the [architectural diagram](./DEVELOPMENT.md#-architecture) in development guides to learn more.

### Emulator management

User of Flowser doesn't need to know what the flow emulator is or that it even exists, because Flowser handles the creation and management of emulator networks by default.

If the user however does want to run and manage flow emulator by himself (from CLI), he/she has the option to do that. Note that this is not the preferred way to use Flowser, because of [this issue with fcl-dev-wallet](./README.md#fcl-dev-wallet-support).

### Development wallet

Usually, if you wanted an easy way to interact with the Flow emulator, you would need to run a separate [fcl-dev-wallet](https://github.com/onflow/fcl-dev-wallet#start-the-dev-wallet) service manually.

Flowser provides integration with [Flow's development wallet](https://github.com/onflow/fcl-dev-wallet) out of the box. That way users can conveniently interact with the Flow blockchain without leaving Flowser.

## 🚧 Caveats

### fcl-dev-wallet support
Flowser currently supports [fcl-dev-wallet](https://github.com/onflow/fcl-dev-wallet) integration only for "custom projects", where flow emulator is managed (started/stopped) by the flowser itself.

We recommend that you do not run flow emulator by yourself and instead create a custom emulator configuration through the flowser app.

If you do want to run the emulator by yourself (from a shell with `flow emulator` command), please leave a comment or a "thumbs up" on [this issue](https://github.com/onflowser/flowser/issues/72).
