const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./user');
const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Enable CORS
/*Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS */

app.use(cors());

// Route for /api/signup - Post
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
  console.log('IAMHERE' + email + [password]);

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
