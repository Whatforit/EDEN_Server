require('dotenv').config();
const server = process.env.MONGO_URI;
console.log(server);
const mongoose = require('mongoose')
mongoose
    .connect(server, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db