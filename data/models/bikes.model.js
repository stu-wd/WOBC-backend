const db = require("../db.config");

const getBikes = () => {
  return db("Bikes");
};

const findBy = (filter) => {
  console.log("filter: ", filter);
  const result = db("Bikes").where(filter);
  return result;
};

const addBike = async (bike) => {
  return db("Bikes").insert(bike).returning("*");
};

const editBike = async (serial, changes) => {
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
};
