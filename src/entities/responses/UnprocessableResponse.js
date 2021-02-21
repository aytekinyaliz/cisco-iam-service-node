const { Response, Metadata } = require('./Response');
const StatusCode = require('../../libs/StatusCode');

class UnprocessableResponse extends Response {

  constructor(errors = [], message = "") {
    super(null, errors, new Metadata(
      StatusCode.UNPROCESSABLE,
      message
    ));
  }
}

module.exports = UnprocessableResponse;