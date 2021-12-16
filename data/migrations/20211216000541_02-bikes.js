exports.up = async (knex) => {
    await knex.schema
        .createTable('donations', table => {
            table.increments()
            table.string('serial')
            table.string('future')
            table.string('condition')
            table.string('type')
            table.string('size')
            table.string('brand')
            table.string('gender')
            table.string('kidadult')
            table.string('received')
            table.string('storage')
            table.string('date') // revisit
            table.integer('user_id')
                table.foreign('user_id')
                    .references('user_id')
                    .inTable('users')
                    .onUpdate('NO ACTION')
                    .onDelete('NO ACTION')
        })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('donations');
};
