const { User } = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");

exports.signUp = async (req, res, next) => {
  console.log(req, "   REQ");
  try {
    const newUser = User.create({
      name: req.name,
      id: req.id,
      password: req.password,
      passwordConfirm: req.passwordConfirm,
    }).then((res) => {
      res.status(201).json({
        status: "Success",
        data: {
          user: newUser,
        },
      });
    });
  } catch {
    res.status(400).json({
      status: "fail",
      message: new Error(console.error("ERROR")),
    });
  }
};
