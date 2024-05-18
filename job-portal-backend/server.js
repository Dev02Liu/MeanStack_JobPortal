// Import required modules
const express = require('express'); // Express framework for building web applications
const mongoose = require('mongoose'); // Mongoose library for MongoDB object modeling
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing (CORS)

// Import job routes
const jobRoutes = require('./routes/jobRoutes'); // Routes for job-related API endpoints

// Create an instance of an Express application
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/jobportal', { useNewUrlParser: true, useUnifiedTopology: true });

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use job routes for API endpoints starting with '/api'
app.use('/api', jobRoutes);

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
