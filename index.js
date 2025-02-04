const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send "Hello World" response
    res.end('Hello World!!!\n');
});

// Define the port
const PORT = 3001

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
