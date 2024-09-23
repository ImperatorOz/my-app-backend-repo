const express = require('express');
const router = express.Router();

// In-memory storage for feedback
let feedbacks = [];

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

    // Save feedback to in-memory storage
    feedbacks.push(newFeedback);

    // Print the submitted data to the server terminal
    console.log('New feedback submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Created At:', newFeedback.createdAt);
    console.log('------------------------');

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;