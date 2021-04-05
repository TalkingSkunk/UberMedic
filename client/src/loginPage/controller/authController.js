const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");

exports.signUp = catchAsync(async (req, res, next) => {
  console.log(req, "   REQ");
  const newUser = await User.create({
    name: req.name,
    id: req.id,
    password: req.password,
    passwordConfirm: req.passwordConfirm,
  });

  res.status(201).json({
    status: "Success",
    data: {
      user: newUser,
    },
  });
});
