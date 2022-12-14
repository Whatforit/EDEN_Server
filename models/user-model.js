const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const UserSchema = mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  hash: { type: String }, // hash is the password
  salt: { type: String }, // salt for the password
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  zip: { type: String },
  country: { type: String },
  pots: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pot" }],
});

UserSchema.methods.setPassword = function (password) {
  this.salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  this.hash = bcrypt.hashSync(password, this.salt);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.hash);
};

const User = (module.exports = mongoose.model("User", UserSchema));
