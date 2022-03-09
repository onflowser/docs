---
sidebar_position: 3
---

# Additional tooling

### MongoDB client

You can use [Robo 3T](https://robomongo.org/) mongodb client app to inspect, debug and edit flowser database.

Connect to Mongo Docker instance with your local machine client using settings in `.env.*` file that was used for startup - use variables in `.env.dev` if you used `dev:start` command.

> Keep in mind that in docker-compose.yml we mapped port 27017 to 27016, use ````localhost```` instead of ```database``` docker-compose internal host name:

```
mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@localhost:27016/${MONGODB_DATABASE}

mongodb://root:rootpassword@localhost:27016/flowser
```

### REST API client

You can use [Postman](https://postman.com) or [Insomnia](https://insomnia.rest) API clients to debug and test Flowser REST APIs.

> Check out https://github.com/onflowser/flowser#rest-api to learn how to import [OpenAPI](https://www.openapis.org/) API specification to your client of choice.
