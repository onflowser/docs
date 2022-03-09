---
sidebar_position: 2
---

# Advanced configuration

If you want to use custom configuration, you can do so by defining a separate environment file (e.g. `.env.local`) and use the bellow variables as a template.

```shell title=.env.sample
API_HOST="http://localhost:3000"
APP_FRONTEND_PORT=3000
APP_BACKEND_PORT=3001
# expected port of the user managed emulator
USER_MANAGED_EMULATOR_PORT=8081

# mongodb config
MONGODB_USERNAME=flowser
MONGODB_PASSWORD=flowserpassword
MONGODB_HOST=database
MONGODB_PORT=27017
MONGODB_DATABASE=flowser

# backend polling interval
# if value of 3000 is given, backend service will refetch data from the blockchain every 3s
DATA_FETCH_INTERVAl=3000

# default flow emulator config
FLOW_EMULATOR_HTTP_PORT=8080
FLOW_EMULATOR_RPC_PORT=3569
# flow service account credentials
# this shouldn'e be changed
FLOW_ACCOUNT_ADDRESS=f8d6e0586b0a20c7
FLOW_ACCOUNT_PRIVATE_KEY=680fa28962650ef346a7edf23d63967b0fcf44958488d0d48f8539ece6e92eba
FLOW_ACCOUNT_PUBLIC_KEY=5a6a7bdb81838e40fc615d4c0eed3d4caacfc7f47a89d319caa370aac6196113573738ba57e09ea5a27a192d48457ee5c0e32011bc10ef93383aabad24a9ce2a
# port for data storage indexing server (backend/data-storage/main.go)
FLOW_DATA_STORAGE_PORT=8888
# flow dev-wallet service url
FLOW_DISCOVERY_WALLET=http://localhost:8701/fcl/authn
```

You can then start the application by running `docker-compose up` command, like so:

```shell
docker-compose \
    --env-file <path-to-custom-env-file> \
    -f docker-compose.yml \
    -f docker-compose.dev.yml \
    up -d
```

To stop local development stack.

```shell
docker-compose \
    --env-file <path-to-custom-env-file> \
    -f docker-compose.yml \
    -f docker-compose.dev.yml \
    down
```

To see logs from all containers, run:

```shell
docker-compose \
    --env-file <path-to-custom-env-file> \
    -f docker-compose.yml \
    -f docker-compose.dev.yml \
    logs
```
