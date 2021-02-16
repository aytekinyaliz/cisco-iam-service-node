
const {
  NotFoundResponse,
  InternalServerErrorResponse
} = require('../entities/responses');
const { NotFoundError } = require('../entities/errors');
const StatusCode = require('../libs/StatusCode');

module.exports = function errorHandler() {

  return function(err, req, res, next) {
    let response = null;

    switch (err.type) {
      case NotFoundError.name:
        response = new NotFoundResponse(err.message);
        break;
      default:
        response = new InternalServerErrorResponse(err.data, err.isPublic ? err.message : StatusCode[err.status]);
        break;
    }

    res.locals.response = response;
    res.locals.outcome = "failed";

    res.status(response.metadata.code).json(response);
  };
}
