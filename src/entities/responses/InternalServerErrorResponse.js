const { Response, Metadata } = require('./Response');
const StatusCode = require('../../libs/StatusCode');

class InternalServerErrorResponse extends Response {
  constructor(
    data = null,
    errors = [],
    message = ''
  ) {
    super(data, errors, new Metadata(
      StatusCode.INTERNAL_SERVER_ERROR,
      message
    ));
  }
}

module.exports = InternalServerErrorResponse;