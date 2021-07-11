# What Street Art • Firebase

## Workflow

### Development

> ⚠️ Unfortunately, there no CI set so far, so deployments should be run locally.

Request `service-account.staging.json` and `service-account.production.json` files from the administration.

Clone the repository.

```sh
git clone https://github.com/TechLabs-Berlin/st21-what-street-art/
```

`cd` into the directory.

```sh
cd st21-what-street-art/firebase
```

To deploy functions and rules, make sure you are logged in using the CLI and then run:

`yarn deploy:staging`

To make it production, use the analogous command:

`yarn deploy:production`

### Updating Data

#### Firestore

Data can be found under the `config` directory, which is not tracked.

Updating data consists of pulling the most recent data from Firestore, making the necessary changes, and then pushing it back.

1. Use the following automation command to pull data from a collection `yarn automation:pull:collection <collection> <environment>`, eg. `yarn automation:pull:collection artworks staging`.

2. Make the necessary changes to the generated `.json` file (e.g. `config/collections/artworks.json`).

3. Push data using `yarn automation:push:collection <collection> <environment>`, eg.: `yarn automation:push:collection artworks staging`.
