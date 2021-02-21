const { Response, Metadata } = require('./Response');
const StatusCode = require('../../libs/StatusCode');

class BadRequestResponse extends Response {
  constructor(message = "Bad request!") {
    super(null, [], new Metadata(
      StatusCode.BAD_REQUEST,
      message
    ));
  }
}

module.exports = BadRequestResponse;