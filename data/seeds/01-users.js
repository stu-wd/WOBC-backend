const generators = require("../../utils/generators");

exports.seed = async function (knex) {
  const pw1 = await generators.password("admin");
  const pw2 = await generators.password("elrose");
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          name: "admin",
          username: "admin",
          // password: 'admin'
          password: pw1,
        },
        {
          name: "Blake Pierce",
          username: "blake",
          // password: 'elrose'
          password: pw2,
        },
      ]);
    });
};
