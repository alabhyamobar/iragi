const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(req.body)
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      Fname: name.Fname,
      Lname: name.Lname,
      email,
      password: hashPassword,
    });

    const token = user.generateAuthToken();

    return res.status(201).json({ token, user });

  } catch (error) {
    next(error);
  }
};
