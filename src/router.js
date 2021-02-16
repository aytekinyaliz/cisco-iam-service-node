const { Router } = require('express');
const authControllerRouter = require('./controllers/auth/routes');


const router = Router();

router.get("/health-check", (req, res) => {
  return res.status(200).send("I am OK");
});

router.use(
  "/api/auth",
  authControllerRouter
);

module.exports = router;