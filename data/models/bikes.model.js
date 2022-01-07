const db = require('../db.config');

const getBikes = () => {
    return db('Bikes')
};

const findBy = (filter) => {
    const result = db('Bikes').where(filter)
    console.log(result)
    if (result.length === 0) {
        return 'Got nothin\' for ya'
    } else return result
}

const addBike = async (bike) => {
    return db('Bikes').insert(bike).returning('*')
}

const editBike = async (serial, changes) => {
    return db('Bikes').where('serial', serial).update(changes).returning('*')
}

module.exports = {
    getBikes,
    findBy,
    addBike,
    editBike
}