const bikesRouter = require("../../api/routes/bikes.router");
const db = require("../db.config");

const getBikes = () => {
  return db("Bikes");
};

const getAllStatuses = () => {
  return db("Bikes").distinct().pluck("status");
};

const getAllBrands = () => {
  return db("Bikes").distinct().pluck("brand");
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
  return db("Bikes").where(filter);
};

const filterBy = async (filters) => {
  const allStatuses = await db("Bikes").distinct().pluck("status");
  const allBrands = await db("Bikes").distinct().pluck("brand");
  const allStyles = await db("Bikes").distinct().pluck("style");
  const allGenders = await db("Bikes").distinct().pluck("gender");
  const allAdultchildren = await db("Bikes").distinct().pluck("adultchild");
  const allSizes = await db("Bikes").distinct().pluck("size");
  const allReceiveds = await db("Bikes").distinct().pluck("received");
  const allStorages = await db("Bikes").distinct().pluck("storage");

  const filteredOptions = {
    status: filters.status.length > 0 ? filters.status : allStatuses,
    brand: filters.brand.length > 0 ? filters.brand : allBrands,
    style: filters.style.length > 0 ? filters.style : allStyles,
    gender: filters.gender.length > 0 ? filters.gender : allGenders,
    adultchild:
      filters.adultchild.length > 0 ? filters.adultchild : allAdultchildren,
    size: filters.size.length > 0 ? filters.size : allSizes,
    received: filters.received.length > 0 ? filters.received : allReceiveds,
    storage: filters.storage.length > 0 ? filters.storage : allStorages,
  };

  const result = await db("Bikes")
    .whereIn("status", filteredOptions.status)
    .whereIn("brand", filteredOptions.brand)
    .whereIn("style", filteredOptions.style)
    .whereIn("gender", filteredOptions.gender)
    .whereIn("adultchild", filteredOptions.adultchild)
    .whereIn("size", filteredOptions.size)
    .whereIn("storage", filteredOptions.storage)
    .whereIn("received", filteredOptions.received);
  console.log("result", result);

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
  filterBy,
};
