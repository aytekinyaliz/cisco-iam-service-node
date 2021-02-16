const mongoose = require('mongoose');
const UserModelSchema = require('./UserModelSchema');

var UserModel = mongoose.model('UserModel', UserModelSchema, 'Users');

module.exports = UserModel;