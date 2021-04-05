const db = require("./models");

exports.signUp = async (req, res, next) => {
  console.log(User);

  try {
    await db.User.create({
      name: req.name,
      id: req.id,
      password: req.password,
      passwordConfirm: req.passwordConfirm,
    });
    console.log(newUser, " CONTROLLER");
    res.status(201).json({
      status: "Success",
      data: {
        user: newUser,
      },
    });
  } catch {
    res.status(400).json({
      status: "fail",
      message: new Error(console.error("ERROR")),
    });
  }
};
