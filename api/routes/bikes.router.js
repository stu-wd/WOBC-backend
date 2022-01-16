const bikesRouter = require("express").Router();
const Bikes = require("../../data/models/bikes.model");
const mw = require("../middleware/bikes.mw");

bikesRouter.get("/", (req, res, next) => {
  Bikes.getBikes()
    .then((bikes) => {
      res.status(200).json(bikes);
    })
    .catch(next);
});

bikesRouter.get("/filter", (req, res, next) => {
  // const options = req.params
  // console.log(req.body)
  Bikes.findBy(req.body)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(next);
});

bikesRouter.get("/:serial", (req, res, next) => {
  const serial = req.params;
  Bikes.findBy(serial)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch(next);
});

bikesRouter.post("/add", mw.validateBody, mw.serialFree, (req, res, next) => {
  Bikes.addBike(req.body)
    .then((newBike) => {
      res.status(201).json({ newBike, message: "Add Success" });
    })
    .catch((err) => {
      res.status(400).json({ error: err, message: "Add Failed" });
    });
});

bikesRouter.put("/:serial", (req, res, next) => {
  // revisit to figure out how to change the serial
  const serial = req.params.serial;
  const changes = req.body;
  Bikes.editBike(serial, changes)
    .then((editedBike) => {
      console.log(editedBike);
      res.status(200).json({ editedBike, message: "Edit Success" });
    })
    .catch((err) => {
      res.status(400).json({ error: err, message: "Edit Failed" });
    });
});

bikesRouter.delete("/:serial", (req, res, next) => {
  // revisit to figure out how to change the serial
  const serial = req.params.serial;
  const changes = req.body;
  Bikes.deleteBike(serial)
    .then((resp) => {
      console.log(resp);
      res.status(200).json({ message: "Delete Success" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = bikesRouter;
