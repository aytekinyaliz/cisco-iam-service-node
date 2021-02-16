const userRepositoryInstance = require('../repositories/user/UserRepository');

class UserService {

  async getByUserName(username) {
    return await userRepositoryInstance.getUserByUserName(username);
  }
}

module.exports = new UserService();