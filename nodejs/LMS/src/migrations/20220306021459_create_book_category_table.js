 /**
 * Create bookcategory table.
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
  export function up(knex) {
    return knex.schema.createTable('book_category', (table) => {
      table.increments('id').primary().unsigned();
      table.string('name', 20).notNull();
      table.timestamp('created_at').default(knex.fn.now()).notNull();
      
    });
  }
  
  /**
   * Drop bookcategory table.
   *
   * @param { Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('book_category');
  }


 
