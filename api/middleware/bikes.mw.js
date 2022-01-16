const Bikes = require("../../data/models/bikes.model");

const validateBody = async (req, res, next) => {
  try {
    const { serial, status } = req.body;
    if (!serial || !status) {
      next({
        status: 400,
        message: "Serial number and status must be entered",
      });
    } else next();
  } catch (err) {
    next({ status: 422, message: "Error in the req.body" });
  }
};

const serialFree = async (req, res, next) => {
  const { serial } = req.body;
  try {
    const checkSerial = await Bikes.findBy({ serial });
    if (checkSerial.length > 0) {
      next({ status: 422, message: "Serial is taken" });
    } else {
      next();
    }
  } catch (err) {
    next({ status: 422, message: "Error in serial free logic" });
  }
};

module.exports = {
  validateBody,
  serialFree,
};
