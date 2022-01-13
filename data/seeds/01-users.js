const generators = require('../../utils/generators');

exports.seed = async function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          name: 'admin',
          username: 'admin',
          password: 'admin'
          // password: generators.password('admin')
        },
        {
          name: 'Blake Pierce',
          username: 'blake',
          password: 'elrose'
          // password: generators.password('elrose')
        }
        
      ]);
    });
};
