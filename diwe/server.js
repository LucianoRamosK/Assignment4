const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const connectionURL =
  'mongodb+srv://lucianoramoskiyota:20%2F09%2F1994@cluster0.8tagpym.mongodb.net/angular?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL
mongoose
  .connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
