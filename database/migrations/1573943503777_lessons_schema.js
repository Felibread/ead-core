/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class LessonsSchema extends Schema {
  up() {
    this.create('lessons', table => {
      table.increments();
      table
        .integer('course_id')
        .unsigned()
        .references('id')
        .inTable('courses')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table.string('title').notNullable();
      table.text('description');
      table.text('content');
      table.timestamps();
    });
  }

  down() {
    this.drop('lessons');
  }
}

module.exports = LessonsSchema;
