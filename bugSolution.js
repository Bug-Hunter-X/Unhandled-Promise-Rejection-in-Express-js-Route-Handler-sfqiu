const express = require('express');
const app = express();

app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error'); // Respond with an error to client
    });
});

async function doSomethingAsync() {
  // Simulate an error
  throw new Error('Something went wrong!');
}

// Add a global unhandledRejection event listener for added safety (optional, but recommended):
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform additional error handling or logging here if needed
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});