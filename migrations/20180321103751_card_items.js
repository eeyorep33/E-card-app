
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('card_items', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('name').notNullable();
        table.string('source').notNullable();
        table.string('catagory').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('card_items') // drop table when reverting
};