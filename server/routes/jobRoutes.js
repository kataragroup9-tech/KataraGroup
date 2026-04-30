const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// All routes start with /api/jobs (defined in server.js)
router.get('/', jobController.getAllJobs);
router.post('/', jobController.createJob);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

module.exports = router;