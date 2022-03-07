/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Anita khanal',
          email: 'anitakhanal95@gmail.com',
          password: 'dgvscsjhagdvcnhsjK',
          is_admin: 'true'
        }
      ]);
    });
}
