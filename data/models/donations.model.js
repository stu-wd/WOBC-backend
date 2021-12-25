const db = require('../db.config');

const getBikes = () => {
    return db('donations')
};

const findBy = async (filter) => {
    const result = await db('donations').where(filter)
    if (result.length === 0) return 'Got nothin\' for ya'
    else return result
}

module.exports = {
    getBikes,
    findBy
}