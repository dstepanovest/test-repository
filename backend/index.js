const server = require('./src/app');
const port = process.env.PORT || 3000;
server(port);