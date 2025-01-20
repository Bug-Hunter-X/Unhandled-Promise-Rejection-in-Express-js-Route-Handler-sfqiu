const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // This error is not handled properly and will cause the server to crash
    console.error('Error:', err);
  });
});

async function doSomethingAsync() {
  // Simulate an error that will be thrown during runtime
  throw new Error('Something went wrong!');
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});