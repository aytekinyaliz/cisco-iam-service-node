const BaseError = require('./BaseError');
const StatusCode = require('../../libs/StatusCode');

class UnprocessableError extends BaseError {
  constructor(errors = []) {
    super('Validation Error', StatusCode.UNPROCESSABLE, errors, UnprocessableError.name);
  }
}

module.exports = UnprocessableError;
