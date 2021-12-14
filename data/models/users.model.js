const db = require('../db.config.js');

const getAll = () => {
    return db('users');
}

module.exports = {
    getAll
}