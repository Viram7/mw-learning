
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let batchDataSchema = new Schema({
    batchName: {
        type: String,
        required: true
    },
    batchCode: {
        type: String,
        required: true,
        unique: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
   
    batch_img_link: {
        type: String,
        required: true
    },
    batchDescription: {
      
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    announcements:[{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    rate:{
        type: String,
        required: true
    },
    discount:{
        type: String,
        
    },
    stu_for: {
        type: [String], // This tells Mongoose it's an array of strings
        required: false
      },
      teacher : {
        type: [String], // This tells Mongoose it's an array of strings
        required: false
      },
});


let BatchData = mongoose.model('BatchData', batchDataSchema);
module.exports = BatchData;