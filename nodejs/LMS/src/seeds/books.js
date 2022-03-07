/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('books')
    .del()
    .then(() => {
      return knex('books').insert([
        {
          bookcategory_id:1,
          name: 'java',
          author: 'java author',
          edition: '1st'
        },
        {
          bookcategory_id:1,
          name: 'Numerical Method',
          author: 'NM author',
          edition: '2nd'
        },
        {
          bookcategory_id:2,
          name: 'Software',
          author: 'software author',
          edition: '2nd'
        },
        {
          bookcategory_id:3,
          name: 'c++',
          author: 'c++ author',
          edition: '2nd'
        }
      ]);
    });
}
