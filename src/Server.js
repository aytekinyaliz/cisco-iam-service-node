const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morganBody = require('morgan-body');

const router = require('./router');
const { notFoundHandler, errorHandler } = require('./middlewares');

class Server {
  app = null;

  constructor(config) {
    this.config = config;
    this.app = express();

    this.initCompress();
    this.initCookieParser();
    this.initCors();
    this.initJsonParser();
    this.initLogger();

    this.setupRoutes();
    this.setupErrorHandler();
  }

  application() {
    return this.app;
  }

  initCompress() {
    this.app.use(compress());
  }

  initCookieParser() {
    this.app.use(cookieParser());
  }

  initCors() {
    this.app.use(cors());
  }

  initJsonParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  initLogger() {
    const { nodeEnv } = this.config;

    if (nodeEnv !== 'test') {
      morganBody(this.app);
    }
  }

  setupRoutes() {
    this.app.use('/', router);

    // catch 404 and forward to error handler
    this.app.use(notFoundHandler);
  }

  setupErrorHandler() {
    // const { nodeEnv } = this.config;

    // error handler, send stacktrace only during development
    this.app.use(errorHandler());
  }
}

module.exports = Server;