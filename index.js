require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 1000;

server.listen(port, () => {
    console.log(`You're tuning in live to station ${port}, the PORT`);
});