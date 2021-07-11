const { green, cyan, blue, red } = require("chalk");

// Logger

const { log } = console;

const init = (message) => {
  log(cyan.bgBlack.bold(" STARTED "), message);
  log("\n");
};

const finish = (message) => {
  log(green.bgBlack.bold(" FINISHED "), message);
  log("\n");
};

const info = (message) => {
  log("\n");
  log(blue.bold(message));
  log("\n");
};

const error = (message) => {
  log("\n");
  log(red.bgBlack.bold(" ERROR "), message);
  log("\n");
};

const logger = {
  init,
  finish,
  info,
  error,
};

module.exports = { logger };
