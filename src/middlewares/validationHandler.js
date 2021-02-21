const { validationResult } = require('express-validator');

const { UnprocessableError } = require('../entities/errors');

module.exports = function() {
  return (req, res, next) => {
    if (res.locals.isHit) {
      return next();
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.info("Inside Controller Handler", errors);
      return next(new UnprocessableError(errors.array()));
    }

    next();
  };
}
