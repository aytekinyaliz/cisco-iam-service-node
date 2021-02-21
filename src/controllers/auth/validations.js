
module.exports = Object.freeze({
  login: {
    username: {
      in: ["body"],
      isString: true,
      trim: true,
      isLength: {
        errorMessage: "Username should be between 4 and 50 characters!",
        options: { min: 4, max: 50 }
      }
    },
    password: {
      in: ["body"],
      isString: true,
      trim: true,
      isLength: {
        errorMessage: "Password should be between 4 and 50 characters!",
        options: { min: 4, max: 50 }
      }
    }
  }
});
