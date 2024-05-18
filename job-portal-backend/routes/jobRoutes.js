// Import the mongoose module
const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// Get all jobs
router.get('/jobs', async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// Get a single job
router.get('/jobs/:id', async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.json(job);
});

// Create a job
router.post('/jobs', async (req, res) => {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
});

// Update a job
router.put('/jobs/:id', async (req, res) => {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
});

// Delete a job
router.delete('/jobs/:id', async (req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted' });
});

module.exports = router;
