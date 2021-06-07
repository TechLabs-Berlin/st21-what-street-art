const csv = require("csvtojson");
const fs = require("fs-extra");
const { logger } = require("./_shared");
const path = require("path");

const config = {
  input: "../../DS/artworks_clean.csv",
  output: `./config/collections/artworks.json`,
};

const fetchArtworks = async () => {
  const operation = `Converting .csv file from: ${config.input}`;
  logger.init(operation);

  const rawResult = await csv().fromFile(path.resolve(__dirname, config.input));

  const result = rawResult.map((item) => ({
    id: item.field1,
    link: item.href,
    title: item.location,
    location: {
      coordinates: {
        lat: item["location/lat"],
        lng: item["location/lng"],
      },
      city: item.cityName,
      country: item.cityCountry,
      address: item["location/address"],
    },
  }));

  await fs.outputFile(config.output, JSON.stringify(result, null, 2));

  logger.finish(operation);
};

fetchArtworks();

// console.log(path.resolve(__dirname, "../../DS/artworks_clean.csv"));
