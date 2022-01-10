const authRouter = require('express').Router();
const Auth = require('../../data/models/auth.model');
const generators = require('../../utils/generators');
const mw = require('../middleware/auth.mw')

authRouter.post('/register', mw.validateBody, mw.usernameFree, async (req, res, next) => {
    let user = req.body;
    const hash = await generators.password(user.password);
    user.password = hash;

    console.log('user: ', user)

    Auth.add(user)
        .then(newUser => {
            const hammeredUserObj = {
                username: newUser[0].username,
                user_id: newUser[0].user_id
            };
            res.status(201).json(hammeredUserObj)
        })
        .catch(err => next(err))
});

authRouter.post('/login', mw.usernameExists, mw.checksPassword, (req, res) => {
    const { user_id, username } = req.body;
    const token = generators.token(req.body);
    res.status(200).json({
        message: `Welcome back, ${username}`,
        token,
        user: {
            user_id: user_id,
            username: username
        }
    });
});

module.exports = authRouter;