const { OKResponse, BadRequestResponse } = require('../../entities/responses')

const { generateToken } = require('../../services/encryption');
const userServiceInstance = require('../../services/UserService');
const StatusCode = require('../../libs/StatusCode');

class AuthController {

  async token(req, res) {
    const { username, password } = req.body;

    const user = await userServiceInstance.getByUserName(username);

    if(!user || user.password !== password) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json(new BadRequestResponse('Username or password is not correct!'));
    }

    return res
      .status(StatusCode.OK)
      .json(new OKResponse({ token: generateToken(username) }));
  }
}

module.exports = new AuthController();