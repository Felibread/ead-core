/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Group extends Model {
  users() {
    this.belongsToMany('App/Models/User').withTimestamps();
  }

  courses() {
    this.belongsToMany('App/Models/Course').withTimestamps();
  }
}

module.exports = Group;
