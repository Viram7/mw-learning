const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const messageSchema = new Schema({
  batchCode: { type: String, required: true },
  user: { type: String, required: true },
  text: { type: String, required: true },
  phoneno: { type: String, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('Message', messageSchema);
