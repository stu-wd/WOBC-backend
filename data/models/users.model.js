const db = require('../db.config.js');

const getAll = () => {
    return db('users');
}

const findBy = (filter) => {
    return db('users').where(filter).first()
}

module.exports = {
    getAll,
    findBy
}