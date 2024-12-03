const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    message: String
});

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = { Contact }