const csv = require("csvtojson");
const fs = require("fs-extra");
const { logger } = require("./_shared");
const path = require("path");
const admin = require("firebase-admin");

const config = {
  input: "../../DS/users.csv",
  output: `./config/collections/users.json`,
};

const fetchUsers = async () => {
  const operation = `Converting .csv file from: ${config.input}`;
  logger.init(operation);

  const rawResult = await csv().fromFile(path.resolve(__dirname, config.input));

  const result = rawResult.map((item) => ({
    id: item.id,
    email: item.email,
    country: item.country,
    age: item.age,
    gender: item.gender,
    liked: item.liked,
    saved: item.saved,
  }));

  await fs.outputFile(config.output, JSON.stringify(result, null, 2));

  logger.finish(operation);
};

fetchUsers();

// console.log(path.resolve(__dirname, "../../DS/users.csv"));
