const authRouter = require('express').Router();
const Auth = require('../../data/models/Auth.model');
const generators = require('../../utils/generators')

authRouter.post('/register', (req, res, next) => {
    let user = req.body;
    const hash = generators.password(user.password);
    user.password = hash;

    Auth.add(user)
        .then((newUser) => {
            const hammeredUserObj = {
                username: newUser[0].username,
                user_id: newUser[0].user_id
            };
            res.status(201).json(hammeredUserObj)
        })
        .catch(err => next(err))
});

module.exports = authRouter;