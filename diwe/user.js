const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
