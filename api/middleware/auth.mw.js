const Users = require('../../data/models/users.model');
const bcrypt = require('bcryptjs');

const validateBody = async (req, res, next) => {
    try {
        const { name, password, username } = req.body;
        if (!name || !password || !username) {
            next({ status: 400, message: 'Missing name, password, or username'})
        } else next()
    } catch (err) {
        next({ status: 422, message: 'Error in req.body' })
    }
};

const usernameFree = async (req, res, next) => {
    const { username } = req.body;
    try {
        const checkUsername = await Users.findBy({ username });
        if (!checkUsername) {
            next()
        } else {
            next({ status: 422, message: 'Username is taken' });
        }
    } catch (err) {
        next(err)
    }
};

const usernameExists = async (req, res, next) => {
    const { username } = req.body;
    try {
        const checkUsername = await Users.findBy({ username });
        if (checkUsername) {
            next()
        } else {
            next({ status: 422, message: 'Username not found' });
        }
    } catch (err) {
        next(err)
    }
};

const checksPassword = async (req, res, next) => {
    const { password, username } = req.body
    Users.findBy({ username })
        .then(returnedUser => {
            if (returnedUser && bcrypt.compareSync(password, returnedUser.password)) {
                req.body = returnedUser
                next()
            } else {
                next({ status: 401, message: 'Wrong password' })
            }
        })
        .catch(next)
}

module.exports = {
    validateBody,
    usernameFree,
    usernameExists,
    checksPassword
}