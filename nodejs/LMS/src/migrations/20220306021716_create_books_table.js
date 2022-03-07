/**
 *  Create books table.
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('bookcategory_id').references('id').inTable('book_category').notNull();
    table.string('name', 25).notNull();
    table.string('author', 50).notNull();
    table.string('edition', 20).notNull();
    table.timestamp('created_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop table books
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('books');
}
