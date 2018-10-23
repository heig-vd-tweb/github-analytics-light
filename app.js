// loads environment variables
require('dotenv/config');
const path = require('path');
const express = require('express');
const api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

// Automatically server all static files from the public directory
app.use(express.static(path.resolve(__dirname, 'public')));

// Register api routes
app.use('/api', api);

// Server the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Forward 404 to error handler
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err);
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${port}`);
});
