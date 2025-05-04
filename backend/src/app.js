const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Exportable server function
const server = (port = 3000) => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
};

module.exports = server;