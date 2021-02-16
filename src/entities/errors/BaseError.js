
class BaseError extends Error {

  constructor(
    message,
    status,
    data = [],
    type = ""
  ) {
    super(message);

    this.status = status;
    this.data = data;
    this.type = type;

    // Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = BaseError;