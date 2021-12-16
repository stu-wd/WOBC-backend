const db = require('../db.config');

const getBikes = () => {
    return db('donations')
};

const findBy = (filter) => {
    return db('donations').where(filter)
}

module.exports = {
    getBikes,
    findBy
}