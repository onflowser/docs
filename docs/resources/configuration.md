---
sidebar_position: 2
---

# Advanced configuration

If you want to use custom configuration, you can do so by defining a separate environment file (e.g. `.env.local`) and use `.env.sample` as a template.

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
