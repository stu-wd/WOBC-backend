const db = require('../db.config');

const add = async (user) => {
    const newUser = await db('users').insert(user, '*')
    return newUser
}

module.exports = {
    add
}