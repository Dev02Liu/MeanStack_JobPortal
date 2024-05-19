// Import required modules
const express = require('express'); // Express framework for building web applications
const mongoose = require('mongoose'); // Mongoose library for MongoDB object modeling
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing (CORS)

// Create an instance of an Express application
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/jobportal');

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use built-in Express JSON parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import job routes
const jobRoutes = require('./routes/jobRoutes'); // Routes for job-related API endpoints

// Use job routes for API endpoints starting with '/api'
app.use('/api', jobRoutes);

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
