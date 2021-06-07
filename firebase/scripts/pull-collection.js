const fs = require("fs-extra");
const admin = require("firebase-admin");
const { logger } = require("./_shared");

// Config

const collection = process.argv[2];
const env = process.argv[3];

const config = {
  collection,
  output: `./config/collections/${collection}.json`,
  serviceAccount: `./service-account.${env}.json`,
};

// Core logic

const pullCollection = async () => {
  const operation = `Pulling ${config.collection.toUpperCase()} collection data`;

  try {
    logger.init(operation);

    // Firebase setup

    admin.initializeApp({
      credential: admin.credential.cert(config.serviceAccount),
    });

    const db = admin.firestore();

    const snapshot = await db.collection(config.collection).get();
    const documents = snapshot.docs;

    const dataPromises = documents.map((document) => document.data());
    const data = await Promise.all(dataPromises);

    await fs.outputFile(config.output, JSON.stringify(data, null, 2));

    logger.finish(operation);
  } catch (err) {
    logger.error(err);
  }
};

pullCollection();
