const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema({
    userName: { type: String, required: true },
    id : { type: String, required: true },
});

