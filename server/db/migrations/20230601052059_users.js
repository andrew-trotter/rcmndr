exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('nickname').notNullable().unique()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTable('users')
}
