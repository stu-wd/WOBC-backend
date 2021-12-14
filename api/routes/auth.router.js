const authRouter = require('express').Router();
const Auth = require('../../data/models/Auth.model');
const generators = require('../../utils/generators');
const mw = require('../middleware/auth.mw')

authRouter.post('/register', mw.validateBody, (req, res, next) => {
    let user = req.body;
    const hash = generators.password(user.password);
    user.password = hash;

    Auth.add(user)
        .then(newUser => {
            const hammeredUserObj = {
                username: newUser[0].username,
                userId: newUser[0].userId
            };
            res.status(201).json(hammeredUserObj)
        })
        .catch(err => next(err))
});

authRouter.post('/login', (req, res) => {
    const { userId, username } = req.body;
    const token = generators.token(req.body);
    res.status(200).json({
        message: `Welcome back, ${username}`,
        token,
        user: {
            userId: userId,
            username: username
        }
    });
});

module.exports = authRouter;