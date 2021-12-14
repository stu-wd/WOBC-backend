exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (table) => {
        table.increments('user_id')
        table.string('username').notNullable().unique()
        table.string('name').notNullable()
        table.string('password').notNullable()
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users');
};
