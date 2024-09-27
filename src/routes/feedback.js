const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// In-memory storage for feedback (if needed)
let feedbacks = [];

// Path for the feedback log file
const feedbackFilePath = path.join(__dirname, 'feedbacks.txt');

router.post('/', (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new feedback
    const newFeedback = {
      name,
      email,
      message,
      createdAt: new Date()
    };

    // Save feedback to in-memory storage (optional)
    feedbacks.push(newFeedback);

    // Print the submitted data to the server terminal
    console.log('New feedback submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Created At:', newFeedback.createdAt);
    console.log('------------------------');

    // Append feedback to the log file
    const feedbackEntry = `Name: ${name}, Email: ${email}, Message: ${message}, Created At: ${newFeedback.createdAt}\n`;
    fs.appendFile(feedbackFilePath, feedbackEntry, (err) => {
      if (err) {
        console.error('Error writing to feedback file:', err);
        return res.status(500).json({ message: 'Error saving feedback' });
      }
    });

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
