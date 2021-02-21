const { Router } = require('express');
const { checkSchema } = require('express-validator');

const authControllerInstance = require('./AuthController');
const validationHandler = require('../../middlewares/validationHandler');

const validations = require('./validations');

const router = Router();

router
  .route("/login")
  .post(
    checkSchema(validations.login),
    validationHandler(),
    authControllerInstance.token
  );

  module.exports = router;