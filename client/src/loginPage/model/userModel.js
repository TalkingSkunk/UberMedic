const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please insert name"],
    trim: true,
  },
  id: {
    type: String,
    required: [true, "Please insert ID/OASIS number"],
  },
  password: {
    type: String,
    required: [true, "Please insert password"],
    trim: true,
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please insert password"],
    trim: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwords are not the same",
    },
  },
});

userSchema.pre("save", async function (next) {
  ////only run if password is modified
  if (!this.isModified("password")) return next();

  ///hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  ////delete password confirm field
  this.passwordConfirm = undefined;
  next();
});

exports.User = mongoose.model("User", userSchema);

// export default User;
