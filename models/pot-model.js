const mongoose = require("mongoose");

const PotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pot_id: { type: String, required: true },
  ip_addr: { type: String, required: true },
  description: { type: String },
  location: { type: String },
});

const Pot = (module.exports = mongoose.model("Pot", PotSchema));
