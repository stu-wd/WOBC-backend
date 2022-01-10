exports.up = async (knex) => {
    await knex.schema
        .createTable('Bikes', table => {
            table.increments()
            table.string('serial').notNullable().unique()
            table.string('future').notNullable()
            table.string('condition')
            table.string('type')
            table.string('size')
            table.string('brand')
            table.string('gender')
            table.string('kidadult')
            table.string('received')
            table.string('storage')
            table.integer('user_id')
                table.foreign('user_id')
                    .references('user_id')
                    .inTable('users')
                    .onUpdate('NO ACTION')
                    .onDelete('NO ACTION')
            table.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
        })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('Bikes');
};
