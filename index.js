const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// POST route to handle JSON data
app.post('/api/data', (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  // You can process the data here as needed
  console.log('Received data:', data);

  res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
