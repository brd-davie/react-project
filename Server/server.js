const express = require('express');
const app = express();

app.listen(4000, () => {
  console.log("Server is serve on port 4000")
})

app.get('/training', (req, res) => {
  res.send('Test Training');
})