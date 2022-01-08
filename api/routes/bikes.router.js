const bikesRouter = require('express').Router();
const Bikes = require('../../data/models/bikes.model');
const mw = require('../middleware/bikes.mw')

bikesRouter.get('/', (req, res, next) => {
    Bikes.getBikes()
        .then(bikes => {
            res.status(200).json(bikes)
        })
        .catch(next)
})

bikesRouter.get('/filter', (req, res, next) => {
    Bikes.findBy(req.body)
        .then(results => {
            res.status(200).json(results)
        })
        .catch(next)
});

bikesRouter.get('/:serial', (req, res, next) => {
    const serial = req.params
    Bikes.findBy(serial)
        .then(results => {
            res.status(200).json(results)
        })
        .catch(next)
})

bikesRouter.post('/add', mw.validateBody, (req, res, next) => {
    Bikes.addBike(req.body)
        .then(newBike => {
            res.status(201).json(newBike)
        })
        .catch(next)
})

bikesRouter.put('/edit', (req, res, next) => {
    // console.log(req.body)
    // revisit to figure out how to change the serial
    const serial = req.body.serial
    const changes = req.body
    Bikes.editBike(serial, changes)
        .then(editedBike => {
            res.status(200).json(editedBike)
        })
        .catch(next)
})

module.exports = bikesRouter;