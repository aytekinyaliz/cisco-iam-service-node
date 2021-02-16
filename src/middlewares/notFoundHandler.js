const NotFoundError = require('../entities/errors/NotFoundError');

module.exports = (req, res, next) => {
  next( new NotFoundError([]) );
};
