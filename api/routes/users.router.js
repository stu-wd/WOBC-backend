const userRouter = require('express').Router();
const Users = require('../../data/models/users.model')

userRouter.get('/', (req, res, next) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => next(err))
});

module.exports = userRouter;