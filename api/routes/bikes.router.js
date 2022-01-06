const bikesRouters = require('express').Router();
const Bikes = require('../../data/models/bikes.model');
const mw = require('../middleware/bikes.mw')

bikesRouters.get('/', (req, res, next) => {
    Bikes.getBikes()
        .then(bikes => {
            res.status(200).json(bikes)
        })
        .catch(next)
})

bikesRouters.post('/filter', (req, res, next) => {
    Bikes.findBy(req.body)
        .then(results => {
            res.status(200).json(results)
        })
        .catch(next)
});

bikesRouters.post('/add', mw.validateBody, (req, res, next) => {
    Bikes.addBike(req.body)
        .then(newBike => {
            res.status(201).json(newBike)
        })
        .catch(next)
})

module.exports = bikesRouters;