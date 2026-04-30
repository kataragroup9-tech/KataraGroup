const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  department: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['Full-Time', 'Part-Time', 'Remote', 'Contract'],
    default: 'Full-Time' 
  },
  desc: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);