const donationsRouter = require('express').Router();
const Donations = require('../../data/models/donations.model');

donationsRouter.get('/', (req, res, next) => {
    Donations.getBikes()
        .then(bikes => {
            res.status(200).json(bikes)
        })
        .catch(err => next(err))
})

donationsRouter.get('/:filter', (req, res, next) => {
    Donations.findBy(req.body)
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(err => next(err))
});

module.exports = donationsRouter;