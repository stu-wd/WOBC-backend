const bikesRouters = require('express').Router();
const Bikes = require('../../data/models/bikes.model');

bikesRouters.get('/', (req, res, next) => {
    Bikes.getBikes()
        .then(bikes => {
            res.status(200).json(bikes)
        })
        .catch(next)
})

bikesRouters.get('/filter', (req, res, next) => {
    Bikes.findBy(req.body)
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(next)
});

bikesRouters.post('/add', (req, res, next) => {
    Bikes.addBike(req.body)
        .then(resp => {
            res.status(201).json(resp)
        })
        .catch(next)
})

module.exports = bikesRouters;