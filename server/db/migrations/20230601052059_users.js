exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('email').primary()
    table.string('nickname').notNullable().unique()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.boolean('public')
    table.index(['auth0_id'], 'idx_auth0_id')
    table.index(['public'], 'idx_public')
    table.index(['nickname'], 'idx_nickname')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('users')
}
