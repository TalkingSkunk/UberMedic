import User from "../model/userModel";
import catchAsync from "../utils/catchAsync";

const signUp = catchAsync(async (req, res, next) => {
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

export default signUp;
