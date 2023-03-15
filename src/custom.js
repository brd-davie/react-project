
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
  const userData = req.body;

  // Read the existing user data from db.json
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      const users = JSON.parse(data);

      // Add the new user to the list of users
      users.push(userData);

      // Write the updated user data back to db.json
      fs.writeFile('db.json', JSON.stringify(users), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Server error');
        } else {
          res.send('User registered successfully');
        }
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
