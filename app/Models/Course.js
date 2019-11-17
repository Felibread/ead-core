/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Course extends Model {
  groups() {
    return this.belongsToMany('App/Models/Group').withTimestamps();
  }

  lessons() {
    return this.hasMany('App/Models/Lesson');
  }
}

module.exports = Course;
