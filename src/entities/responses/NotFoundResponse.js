const { Response, Metadata } = require('./Response');
const StatusCode = require('../../libs/StatusCode');


class NotFoundResponse extends Response {
  constructor(message = "Not Found!") {
    super(null, [],new Metadata(
      StatusCode.NOT_FOUND,
      message
    ));
  }
}

module.exports = NotFoundResponse;