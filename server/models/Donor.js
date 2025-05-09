const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bloodGroup: String,
    contact: String,
    approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Donor', donorSchema);
