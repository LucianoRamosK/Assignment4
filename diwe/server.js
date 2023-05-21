const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const connectionURL =
  'mongodb+srv://lucianoramoskiyota:20%2F09%2F1994@cluster0.8tagpym.mongodb.net/angular?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL

// Define the user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Create a user model
const User = mongoose.model('User', userSchema);

mongoose
  .connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Route for /api/signup - Post
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  // Create a new user
  const newUser = new User({
    email: email,
    password: password,
  });

  // Save the user to the database
  newUser
    .save()
    .then(() => {
      res.send('User signed up successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving user');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
