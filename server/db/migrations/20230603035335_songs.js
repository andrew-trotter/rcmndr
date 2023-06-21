exports.up = async function (knex) {
  await knex.schema.createTable('songs', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id').notNullable()
    table.string('title').notNullable()
    table.string('artist').notNullable()
    table.string('genre')
    table.string('link')
    table.string('comments')
    table.index(['genre'], 'idx_genre')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('songs')
}
