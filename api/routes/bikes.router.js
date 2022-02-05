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

bikesRouter.post("/filter", (req, res, next) => {
  console.log(req.body);
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

bikesRouter.get("/form/status", (req, res, next) => {
  Bikes.getAllStatuses()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

bikesRouter.get("/form/size", (req, res, next) => {
  Bikes.getAllSizes()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

bikesRouter.get("/form/style", (req, res, next) => {
  Bikes.getAllStyles()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

bikesRouter.get("/form/received", (req, res, next) => {
  Bikes.getAllReceiveds()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

bikesRouter.get("/form/storage", (req, res, next) => {
  Bikes.getAllStorages()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(next);
});

bikesRouter.get("/form/refresh", async (req, res, next) => {
  const statuses = await Bikes.getAllStatuses();
  const sizes = await Bikes.getAllSizes();
  const receiveds = await Bikes.getAllReceiveds();
  const styles = await Bikes.getAllStyles();
  const storage = await Bikes.getAllStorages();

  res.status(200).json({
    status: statuses,
    size: sizes,
    received: receiveds,
    style: styles,
    storage: storage,
  });
});

module.exports = bikesRouter;
