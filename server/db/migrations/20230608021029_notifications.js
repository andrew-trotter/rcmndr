exports.up = function (knex) {
  return knex.schema.createTable('notifications', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id') // the user who is receiving the notification
    table.string('friend_id').references('users.auth0_id') // the user who is sending the notification
    table.string('message')
    table.boolean('is_read').defaultTo(false) // automatically set to false
    table.integer('timestamp') // the time the notification was sent
    table.index(['user_id'], 'idx_notifications_user_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('notifications')
}
