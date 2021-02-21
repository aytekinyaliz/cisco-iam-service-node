
const {
  BadRequestResponse,
  NotFoundResponse,
  InternalServerErrorResponse,
  UnprocessableResponse
} = require('../entities/responses');
const { NotFoundError, UnprocessableError } = require('../entities/errors');
const StatusCode = require('../libs/StatusCode');

module.exports = function errorHandler() {

  return function(err, req, res, next) {
    let response = null;

    switch (err.type) {
      case NotFoundError.name:
        response = new NotFoundResponse(err.message);
        break;
        case UnprocessableError.name:
          response = new UnprocessableResponse(err.data, err.message);
          break;
      default:
        console.log(err);
        response = new InternalServerErrorResponse(err.data, err.isPublic ? err.message : StatusCode[err.status]);
        break;
    }

    res.locals.response = response;
    res.locals.outcome = "failed";

    res.status(response.metadata.code).json(response);
  };
}
