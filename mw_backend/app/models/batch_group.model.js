const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const batchGroupSchema = new Schema({
    name: { type: String, required: true },
    group_img_link: { type: String },
    batchCode: { type: String }, // ✅ corrected
    groupId: { type: String, required: true, unique: true },
    lastMessage :{type:String},
    members: [{
        userId: { type: String, required: true },
        role: { type: String, enum: ['admin', 'member'], default: 'member' },
        joinedAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });


module.exports = mongoose.model('BatchGroup', batchGroupSchema);
