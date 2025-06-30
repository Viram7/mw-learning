let mongoose = require('mongoose');
let Schema = mongoose.Schema;
 const userDataSchema = new Schema({
    img_link: {
        type: String,
        
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
 
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,

    },
    state: {
        type: String,
        
    },
    stream: {
        type: String,
        
    },
    exam:[

    ],
    gender:{
        type: String,
    },
    batch_code:[
      
    ]
});


 let userData = mongoose.model('UserData', userDataSchema);
module.exports = userData;