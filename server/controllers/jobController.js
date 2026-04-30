const Job = require('../models/Job');
const mongoose = require('mongoose');

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create job
exports.createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update job
exports.updateJob = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedJob) return res.status(404).json({ message: "Job not found" });
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};