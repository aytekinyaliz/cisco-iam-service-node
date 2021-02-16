const BaseError = require('./BaseError');
const StatusCode = require('../../libs/StatusCode');

class NotFoundError extends BaseError {
  constructor(errors = []) {
    super('Page Not found', StatusCode.NOT_FOUND, errors, NotFoundError.name);
  }
}

module.exports = NotFoundError;