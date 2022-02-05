const db = require("../db.config");

const getBikes = () => {
  return db("Bikes");
};

const getAllStatuses = () => {
  return db("Bikes").distinct().pluck("status");
};

const getAllStyles = async () => {
  const styles = await db("Bikes").distinct().pluck("style");
  let noEmptyStringOption = [];
  for (const i in styles) {
    const option = styles[i];
    if (option != "") {
      noEmptyStringOption.push(option);
    }
  }
  return noEmptyStringOption;
};

const getAllSizes = async () => {
  const sizes = await db("Bikes").distinct().pluck("size");
  let noEmptyStringOption = [];
  for (const i in sizes) {
    const option = sizes[i];
    if (option != "") {
      noEmptyStringOption.push(option);
    }
  }
  return noEmptyStringOption;
};

const getAllReceiveds = async () => {
  const receiveds = await db("Bikes").distinct().pluck("received");
  let noEmptyStringOption = [];
  for (const i in receiveds) {
    const option = receiveds[i];
    if (option != "") {
      noEmptyStringOption.push(option);
    }
  }
  return noEmptyStringOption;
};

const getAllStorages = async () => {
  const storages = await db("Bikes").distinct().pluck("storage");
  let noEmptyStringOption = [];
  for (const i in storages) {
    const option = storages[i];
    if (option != "") {
      noEmptyStringOption.push(option);
    }
  }
  return noEmptyStringOption;
};

const findBy = (filter) => {
  const result = db("Bikes").where(filter);
  return result;
};

const addBike = (bike) => {
  return db("Bikes").insert(bike).returning("*");
};

const editBike = (serial, changes) => {
  return db("Bikes").where("serial", serial).update(changes).returning("*");
};

const deleteBike = async (serial) => {
  const attempt = await db("Bikes").where("serial", serial).del();
  return;
};

module.exports = {
  getBikes,
  findBy,
  addBike,
  editBike,
  deleteBike,
  getAllStatuses,
  getAllSizes,
  getAllReceiveds,
  getAllStorages,
  getAllStyles,
};
