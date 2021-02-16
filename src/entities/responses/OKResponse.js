const { Response, Metadata } = require('./Response');
const StatusCode = require('../../libs/StatusCode');


class OKResponse extends Response {

  constructor(data) {
    super(data, [], new Metadata(
      StatusCode.OK,
      "OK"
    ));
  }
}

module.exports = OKResponse;