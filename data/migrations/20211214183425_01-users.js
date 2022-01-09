exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (table) => {
        table.increments('user_id')
        table.string('username').notNullable().unique()
        table.string('password').notNullable()
        table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users');
};
