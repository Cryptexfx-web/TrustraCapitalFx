const mongoose = require('mongoose');

module.exports = mongoose.model('Investment', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
  amount: Number,
  roiAmount: Number,
  status: { type: String, default: 'running' }
}, { timestamps: true }));
