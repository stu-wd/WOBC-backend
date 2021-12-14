const generators = require('../../utils/generators');

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'admin',
          name: 'Admin',
          password: generators.password('admin')
        },
        {
          username: 'bpierce',
          name: 'Blake Pierce',
          password: generators.password('Rhino')
        }
      ]);
    });
};
