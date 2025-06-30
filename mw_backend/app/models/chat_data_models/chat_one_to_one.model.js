const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const directChatSchema = new Schema({
    roomId: { type: ObjectId, ref: 'Chats', required: true }, // Refers to chat room/group
  userA: { type: ObjectId, ref: 'User', required: true },
  userB: { type: ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DirectChat', directChatSchema);
