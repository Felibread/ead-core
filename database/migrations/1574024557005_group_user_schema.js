/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class GroupUserSchema extends Schema {
  up() {
    this.create('group_user', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
        .index('user_id');
      table
        .integer('group_id')
        .unsigned()
        .references('groups.id')
        .onDelete('CASCADE')
        .index('group_user__id');
      table.timestamps();
    });
  }

  down() {
    this.drop('group_user');
  }
}

module.exports = GroupUserSchema;
