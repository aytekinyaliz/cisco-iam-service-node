const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config();
}

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL
}