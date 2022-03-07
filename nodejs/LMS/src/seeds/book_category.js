/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('book_category')
    .del()
    .then(() => {
      return knex('book_category').insert([
        {
          name: 'csit'
        },
        {
          name: 'software engineer'
        },
        {
          name: 'Bit'
        },
        {
          name: 'management'
        }
      ]);
    });
}
