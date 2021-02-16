const { Router } = require('express');
const authControllerInstance = require('./AuthController');

const router = Router();

router
  .route("/token")
  .post(
    // checkSchema(validations.list as any),
    // validationHandler(),
    authControllerInstance.token
  );

  module.exports = router;