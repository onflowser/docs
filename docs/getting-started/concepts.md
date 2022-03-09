---
sidebar_position: 3
---

# Core Concepts

Flowser is a tool that in its core helps you with managing the flow emulator and inspecting the current blockchain state.

### Data sourcing

All the interaction between Flowser and Flow blockchain is handled by the [Flow client library (fcl)](https://docs.onflow.org/fcl/).

Fcl provides a single shared interface for interacting with any type of Flow blockchain network (testnet, mainnet, emulator,...). Because of that, Flowser has the ability to aggregate data from any Flow data source and currently supports Testnet and local Emulator blockchains.

:::tip
See the [architecture section](/resources/architecture) to learn more about interaction between system components.

:::
### Emulator management

User of Flowser doesn't need to know what the flow emulator is or that it even exists, because Flowser handles the creation and management of emulator networks by default.

If the user however does want to run and manage flow emulator by himself (from CLI), he/she has the option to do that. Note that this is not the preferred way to use Flowser, because of [this issue with fcl-dev-wallet](/getting-started/caveats#fcl-dev-wallet-support).

### Development wallet

Usually, if you wanted an easy way to interact with the Flow emulator, you would need to run a separate [fcl-dev-wallet](https://github.com/onflow/fcl-dev-wallet#start-the-dev-wallet) service manually.

Flowser provides integration with [Flow's development wallet](https://github.com/onflow/fcl-dev-wallet) out of the box. That way users can conveniently interact with the Flow blockchain without leaving Flowser.
