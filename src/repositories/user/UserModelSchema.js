const mongoose = require('mongoose');

var UserModelSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = UserModelSchema;