const { response } = require("express");
const User = require("../models/user-model");

createUser = (req, res) => {
  console.log(req.body);
  const newUser = new User();
  newUser.userName = req.body.userName;
  newUser.email = req.body.email;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.phone = req.body.phone;
  newUser.zip = req.body.zip;
  newUser.country = req.body.country;
  newUser.setPassword(req.body.password);
  console.log(newUser);
  newUser
    .save()
    .then(() => res.status(200).json("User created!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

loginUser = (req, res) => {
  User.findOne({ userName: req.body.userName })
    .then((user) => {
      console.log("user", user);
      if (user) {
        if (user.validPassword(req.body.password)) {
          res.status(200).json({"Log in successful": user});
        } else {
          res.status(400).json("Invalid password");
        }
      } else {
        res.status(400).json("Invalid userName");
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

updateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.userName = req.body.userName;
      user.email = req.body.email;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.phone = req.body.phone;
      user.zip = req.body.zip;
      user.country = req.body.country;
      user.setPassword(req.body.password);
      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

updateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.userName = req.body.userName;
      user.email = req.body.email;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.phone = req.body.phone;
      user.zip = req.body.zip;
      user.country = req.body.country;
      user.setPassword(req.body.password);
      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

addPot = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.pots.push(req.body.pot_id);
      user
        .save()
        .then(() => res.json("Pot added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUser,
};
