const Users = require('../../data/models/users.model');
const bcrypt = require('bcryptjs');

const validateBody = async (req, res, next) => {
    try {
        // const { password, username } = req.body;
        // if ( !password || !username ) {
            // if ( !name || !password || !username ) {
            //     next({ status: 400, message: 'Missing name, password, or username'})
            // } else next()
        const { name, password, username } = req.body;
        if (!name) {
            next({ status: 400, message: 'Name required' })
        } else if (!password) {
            next({ status: 400, message: 'Password required' })
        } else if (!username) {
            next({ status: 400, message: 'Username required' })
        } else {
            next()
        }
    } catch (err) {
        next({ status: 422, message: 'Body Validation Error' })
    }
};

const usernameFree = async (req, res, next) => {
    const { username } = req.body;
    try {
        const checkUsername = await Users.findBy({ username });
        if (!checkUsername) {
            next()
        } else {
            next({ status: 422, message: 'Username already taken' });
        }
    } catch (err) {
        next({ status: 422, message: 'Username creation conflict' })
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
        next({ status: 422, message: 'Username search conflict' })
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
                next({ status: 401, message: 'Incorrect password' })
            }
        })
        .catch({ status: 401, message: 'Password flow error' })
}

module.exports = {
    validateBody,
    usernameFree,
    usernameExists,
    checksPassword
}