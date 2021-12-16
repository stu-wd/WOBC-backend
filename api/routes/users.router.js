const usersRouter = require('express').Router();
const Users = require('../../data/models/users.model')

usersRouter.get('/', (req, res, next) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => next(err))
});

module.exports = usersRouter;