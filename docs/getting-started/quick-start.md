---
sidebar_position: 1
slug: /
---

# Quick start

### 1. Clone flowser repository

```bash
git clone https://github.com/onflowser/flowser
```

### 2. Install dependencies

You need to have Docker and docker-compose installed on your system in order to run Flowser.

See: [Docker installation instructions](https://www.docker.com/get-started)

### 3. Start Flowser

This command will start Flowser with default configuration (recommended).

```bash
npm run prod:start
```

:::tip
You can also run flowser with this helper bash script, if you don't have npm installed.

```bash
bash run.sh start
```
:::

If flowser started successfully, you should see the bellow output:
```bash
Creating frontend-prod ... done
Creating database      ... done
Creating backend-prod  ... done
Creating dev-wallet    ... done
```

If you encounter any issues during app build or container start, check out our [Troubleshooting Guide](/resources/development#troubleshooting).

### 4. Open in browser

After flowser had successfully started, you can open the app in your favourite browser at [http://localhost:6060](http://localhost:6060) 🥳.

Good job, you can now start flowsing around the flow blockchain 🏄.
