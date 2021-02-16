const config = require('./src/config');
const Server = require('./src/Server');
const { openConnection } = require('./src/services/database');


openConnection(config.mongoUrl)
  .then(async () => {
    const server = new Server(config);

    const runningServer = server.application().listen(config.port);

    runningServer.on("listening", async () => {
      const ann = `|| App is running at port '${config.port}' in '${config.nodeEnv}' mode ||`;
      console.info(ann.replace(/[^]/g, "-"));
      console.info(ann);
      console.info(ann.replace(/[^]/g, "-"));
      console.info("Press CTRL-C to stop\n");
    });

    runningServer.on("error", err => {
      console.debug(":::::: GOT ERROR IN STARTING SERVER ::::::");
      console.error(err);
    });

    runningServer.on("close", () => {
      console.debug(`:::::: CLOSING SERVER RUNNING ON '${config.port}' IN '${config.nodeEnv}' MODE ::::::`);
    });
  })
  .catch(err => {
    console.debug(":::::: GOT ERROR WHILE CONNECTING TO DB ::::::");
    console.error(err);
  });
