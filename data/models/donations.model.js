const db = require('../db.config');

const getBikes = () => {
    return db('donations')
};

const findBy = async (filter) => {
    return await db('donations').where(filter)
}

module.exports = {
    getBikes,
    findBy
}