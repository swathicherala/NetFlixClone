const bcrypt = require("bcrypt");
const userModel = require("../model/signup");
const jwt = require("jsonwebtoken");

exports.postSignin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const exsitUser = await userModel.findOne({ email: email });
    if (exsitUser) {
      const error = new Error(
        "Eamil already exist, please pick another email!"
      );
      res.status(409).json({
        error: "Eamil already exist, please pick another email! ",
      });
      error.statusCode = 409;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new userModel({
      // fullname: fullname,
      email: email,
      password: hashedPassword,
    });
    const result = await user.save();
    res.status(200).json({
      message: "User created",
      user: { id: result._id, email: result.email },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

let loadedUser;
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      const error = new Error("user with this email not found!");
      error.statusCode = 401;
      throw error;
    }
    loadedUser = user;
    console.log(loadedUser)

    const comparePassword = bcrypt.compare(password, user.password);
    console.log(comparePassword)
    if (!comparePassword) {
      const error = new Error("password is not match!");
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign({ email: loadedUser.email }, "expressnuxtsecret", {
      expiresIn: "40m",
    });
    res.status(200).json({ token: token });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getUser = (req, res, next) => {
  res.status(200).json({
    user: {
      id: loadedUser._id,
      email: loadedUser.email,
    },
  });
  console.log(user)

};