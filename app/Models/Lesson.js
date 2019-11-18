/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Lesson extends Model {
  course() {
    return this.belongsTo('App/Models/Course');
  }
}

module.exports = Lesson;
