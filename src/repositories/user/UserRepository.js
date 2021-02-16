const mongoose = require('mongoose');
const UserModel = require('./UserModel')


class UserRepository {

  async getUserByUserName(username) {

    try {
      return await UserModel.findOne({ username });
    } catch(e) {
      console.log('ERRRRR: ', err);
      return null;
    }
  }
}

module.exports = new UserRepository();