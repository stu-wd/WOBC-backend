const generators = require('../../utils/generators');

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'admin',
          password: generators.password(process.env.ADMIN_PW)
        },
        {
          username: 'blake',
          password: generators.password(process.env.BLAKE_PW)
        }
      ]);
    });
};
