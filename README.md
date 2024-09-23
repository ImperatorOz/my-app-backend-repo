# Feedback API

This project is a simple backend API for handling feedback submissions. It provides an endpoint for submitting feedback and stores the submissions in memory.  
The submitted data is printed to the server terminal whenever a new feedback is received. It will output the name, email, message, and creation time of each new feedback submission.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features

- RESTful API for submitting feedback
- In-memory storage of feedback submissions
- Input validation for required fields
- CORS enabled for cross-origin requests
- Environment variable configuration

## Technologies

- Node.js
- Express.js
- dotenv (for environment variable management)
- cors (for handling Cross-Origin Resource Sharing)

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:  

   ```bash
   git clone https://github.com/ImperatorOz/my-app-backend-repo.git
   cd feedback-api
   ```

2. Install dependencies:  

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:  

   ```bash
   PORT=5000
   ```

4. Start the server:  

   ```bash
   npm start
   ```

## Usage

Once the server is running, you can submit feedback to the API using a POST request to the `/api/feedback` endpoint.

Example using curl:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","message":"Great service!"}' http://localhost:5000/api/feedback
```

## API Endpoints

### POST /api/feedback

Submit a new feedback.

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Responses:**

- `201 Created` - Feedback submitted successfully
- `400 Bad Request` - Missing required fields
- `500 Internal Server Error` - Server error

## Environment Variables

- `PORT`: The port number on which the server will run (default: 5000)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
