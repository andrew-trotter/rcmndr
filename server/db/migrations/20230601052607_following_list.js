exports.up = async function (knex) {
  await knex.schema.createTable('following_list', (table) => {
    // this is a composite primary key
    table.primary(['user_id', 'following_id'])
    table.string('user_id').references('users.auth0_id').notNullable()
    table.string('following_id').references('users.auth0_id').notNullable()
    table.index(['user_id'], 'idx_user_id')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('following_list')
}
