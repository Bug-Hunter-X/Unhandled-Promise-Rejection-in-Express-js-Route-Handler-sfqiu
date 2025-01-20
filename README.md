# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js applications using Express.js: unhandled promise rejections in route handlers.  Improper error handling within asynchronous operations can lead to unexpected server crashes.

## Bug

The `bug.js` file shows an Express.js application with a route handler that includes an asynchronous function (`doSomethingAsync`). This function simulates throwing an error.  The `catch` block logs the error, but this is insufficient to prevent the application from crashing.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections using a global `unhandledRejection` event listener or proper error handling within the async function.  This prevents server crashes and ensures graceful error handling.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install Express.js.
4. Run `node bug.js`. Observe the server crash.
5. Run `node bugSolution.js`. Observe the error is handled gracefully without a server crash.
