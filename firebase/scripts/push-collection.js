const fs = require("fs-extra");
const admin = require("firebase-admin");
const { logger } = require("./_shared");

// Config

const collection = process.argv[2];
const env = process.argv[3];

const config = {
  collection,
  input: `./config/collections/${collection}.json`,
  serviceAccount: `./service-account.${env}.json`,
};

// Core logic

const pushCollection = async () => {
  const operation = `Pushing data to ${config.collection.toUpperCase()} collection`;

  try {
    // Firebase setup

    admin.initializeApp({
      credential: admin.credential.cert(config.serviceAccount),
    });

    const db = admin.firestore();
    const batch = db.batch();

    const rawData = await fs.readJson(config.input);

    // Temp workaround
    const data = rawData.slice(0, 500);

    // Batch uploading

    data.forEach((doc) => {
      const docRef = db.collection(config.collection).doc(doc.id);
      batch.set(docRef, doc);
    });

    logger.init(operation);

    await batch.commit();

    logger.finish(operation);
  } catch (err) {
    logger.error(err);
  }
};

pushCollection();
