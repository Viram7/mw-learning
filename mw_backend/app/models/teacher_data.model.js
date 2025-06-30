let express = require('express');
mongoose = require('mongoose');
let Schema = mongoose.Schema;

let teacherDataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    img_link: {
        type: String,
        
    },
    subject: {
        type: String,
        required: true
    },
    experience: {
        type: String,
       
    }
});
let teacherData = mongoose.model('TeacherData', teacherDataSchema);
module.exports = teacherData;