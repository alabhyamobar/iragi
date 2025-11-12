const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/user.controller");
const testController = require("../controller/test.controller")

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email"),
    body("name.Fname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

router.post("/test", testController.testService)

module.exports = router;
