const mongoose = require('mongoose');

module.exports = mongoose.model('Withdrawal', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  status: { type: String, default: 'pending' }
}, { timestamps: true }));
