const { builtinModules } = require("module");
const Pot = require("../models/pot-model");

createPot = (req, res) => {
  const newPot = new Pot();
  newPot.name = req.body.name;
  newPot.pot_id = req.body.pot_id;
  newPot.ip_addr = req.body.ip_addr;
  newPot.description = req.body.description;
  newPot.location = req.body.location;
  newPot
    .save()
    .then(() => res.json("Pot added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

getPot = (req, res) => {
  Pot.findById(req.params.id)
    .then((pot) => res.json(pot))
    .catch((err) => res.status(400).json("Error: " + err));
};

getPots = (req, res) => {
  Pot.find()
    .then((pots) => res.json(pots))
    .catch((err) => res.status(400).json("Error: " + err));
};

deletePot = (req, res) => {
  Pot.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pot deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

updatePot = (req, res) => {
  Pot.findById(req.params.id)
    .then((pot) => {
      pot.name = req.body.name;
      pot.pot_id = req.body.pot_id;
      pot.ip_addr = req.body.ip_addr;
      pot.description = req.body.description;
      pot.location = req.body.location;
      pot
        .save()
        .then(() => res.json("Pot updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  createPot,
  getPot,
  getPots,
  deletePot,
  updatePot,
};
