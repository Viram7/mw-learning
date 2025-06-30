const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const chatGroupDataSchema = new Schema({
  roomId: { type: ObjectId, ref: 'Chats', required: true },
  name: { type: String, required: true },
  members: [{ type: ObjectId, ref: 'User' }],
  createdBy: { type: ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatGroup', chatGroupDataSchema);
