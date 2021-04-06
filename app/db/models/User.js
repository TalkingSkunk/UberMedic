const mongoose = require("mongoose");
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
    minLength: 5,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  ////only run if password is modified
  try {
    if (!this.isModified("password")) return next();

    ///hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    ////delete password confirm field
    this.passwordConfirm = undefined;
    next();
  } catch {
    console.log(new Error("ERROR----ENCRYPTION FAILED"));
  }
});

userSchema.methods.correctPassword = async function (inputPsw, userPsw) {
  return await bcrypt.compare(inputPsw, userPsw);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
