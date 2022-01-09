const Bikes = require('../../data/models/bikes.model');

const validateBody = async (req, res, next) => {
    try {
        const { serial, future } = req.body;
        if (!serial || !future) {
            next({ status: 400, message: 'Serial number and future must be entered' });
        } else next()
    } catch (err) {
        next({ status: 422, message: 'Error in the req.body' });
    };
};

const checkSerialIsFree = async (req, res, next) => {
    try {
        const { serial } = req.body
        const serialCheck = await Bikes.findBy({ serial })
        if (!serialCheck.serial) {
            next()
        } else {
            next({ status: 400, message: 'Serial already registered' })
        }
    } catch (err) {
        next({ status: 400, message: 'Catch error' })
    }
}

module.exports = {
    validateBody,
    checkSerialIsFree
}