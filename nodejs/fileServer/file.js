const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  try {
    const file = fs.readFileSync('sample-text.txt');
    // Send the response body
    response.end(file.toString());
  } catch (err) {
    console.log('An error occurred:', err);
  }
}).listen(8880);

// Console will print the message
console.log('Server running at http://127.0.0.1:8880/');

