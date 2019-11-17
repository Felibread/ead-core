/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CourseGroupSchema extends Schema {
  up() {
    this.create('course_group', table => {
      table.increments();
      table
        .integer('course_id')
        .unsigned()
        .references('courses.id')
        .onDelete('CASCADE')
        .index('course_id');
      table
        .integer('group_id')
        .unsigned()
        .references('groups.id')
        .onDelete('CASCADE')
        .index('course_group_id');
      table.timestamps();
    });
  }

  down() {
    this.drop('course_group');
  }
}

module.exports = CourseGroupSchema;
