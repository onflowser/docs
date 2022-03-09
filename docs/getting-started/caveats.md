---
sidebar_position: 4
---

# Caveats

### fcl-dev-wallet support
Flowser currently supports [fcl-dev-wallet](https://github.com/onflow/fcl-dev-wallet) integration only for "custom projects", where flow emulator is managed (started/stopped) by the flowser itself.

We recommend that you do not run flow emulator by yourself and instead create a custom emulator configuration through the flowser app.

If you do want to run the emulator by yourself (from a shell with `flow emulator` command), please leave a comment or a "thumbs up" on [this issue](https://github.com/onflowser/flowser/issues/72).
