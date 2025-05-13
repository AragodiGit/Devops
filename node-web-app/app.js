const express = require('express');
const app = express();
const port = 80;  // Port 80 to make it public

app.get('/', (req, res) => {
  res.send('Hello from Node.js running in Docker on EC2! By Rakesh');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
