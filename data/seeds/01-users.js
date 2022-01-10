const generators = require('../../utils/generators');

exports.seed = async function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: 'admin',
          password: generators.password('admin')
        },
        {
          username: 'blake',
          password: generators.password('elrose')
        }
        
      ]);
    });
};
