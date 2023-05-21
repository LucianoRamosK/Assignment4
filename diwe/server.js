const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

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

// Route for /api/signup - Post
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  // Create a new user
  const newUser = new User({
    email: email,
    password: password,
  });

  // Save the user to the database
  newUser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving user');
    } else {
      res.send('User signed up successfully');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
