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

module.exports = {
    validateBody
}