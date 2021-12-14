const server = require('./api/server');

const port = 5000;

server.listen(port, () => {
    console.log(`You're tuning in live to station ${port}, the PORT`);
});