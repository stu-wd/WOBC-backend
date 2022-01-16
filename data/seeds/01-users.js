const generators = require("../../utils/generators");

exports.seed = async function (knex) {
  const pw1 = await generators.password(process.env.ADMIN_PW);
  const pw2 = await generators.password(process.env.BLAKE_PW);
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
