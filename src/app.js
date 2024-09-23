const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedback');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
