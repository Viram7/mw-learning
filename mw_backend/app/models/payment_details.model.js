const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentDetailsSchema = new Schema({
  user_id:{type: String, required: true },
  phoneNumber: { type: String, required: true },
  fullTime: { type: String },
  batchCode: { type: String },
  coupon: { type: String },
  discount: { type: String },
  donate: { type: String },
  price: { type: String },
  totalAmount: { type: String },
  transactionId: { type: String, required: true }
}, {
  timestamps: true // Optional: Adds createdAt and updatedAt
});

// Explicitly create the index (helpful in dev)
paymentDetailsSchema.index({ transactionId: 1 }, { unique: true });

const PaymentDetails = mongoose.model('PaymentDetails', paymentDetailsSchema);
module.exports = PaymentDetails;
