let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let adminDataSchema = new Schema({
    img_link: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true }

});

module.exports = mongoose.model('AdminData', adminDataSchema);