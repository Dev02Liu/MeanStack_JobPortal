// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for a job listing
const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    description: String,
    location: String,
    salary: Number,
    datePosted: { type: Date, default: Date.now }
});

// Export the Job model based on the jobSchema
module.exports = mongoose.model('Job', jobSchema);