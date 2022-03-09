---
sidebar_position: 2
---

# Features

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
