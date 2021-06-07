const csv = require("csvtojson");
const fs = require("fs-extra");
const { logger } = require("./_shared");
const path = require("path");
const admin = require("firebase-admin");

const config = {
  input: "../../DS/data_final.csv",
  output: `./config/collections/artworks.json`,
};

const fetchArtworks = async () => {
  const operation = `Converting .csv file from: ${config.input}`;
  logger.init(operation);

  const rawResult = await csv().fromFile(path.resolve(__dirname, config.input));

  const result = rawResult.map((item) => ({
    id: item.id,
    link: item.href,
    title: item.location,
    likes: Number(item.likes),
    dateAdded: admin.firestore.Timestamp.fromDate(new Date(item.date_added)),
    location: {
      coordinates: {
        lat: item["location_lat"],
        lng: item["location_lng"],
      },
      city: item.cityName,
      country: item.cityCountry,
      address: item["location_address"],
    },
  }));

  await fs.outputFile(config.output, JSON.stringify(result, null, 2));

  logger.finish(operation);
};

fetchArtworks();

// console.log(path.resolve(__dirname, "../../DS/artworks_clean.csv"));
