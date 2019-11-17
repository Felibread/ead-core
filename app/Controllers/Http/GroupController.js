const Group = use('App/Models/Group');

class GroupController {
  async index() {
    const group = await Group.all();

    return group;
  }

  async store({ request }) {
    const { title, users } = request.only(['title', 'users']);

    const group = await Group.create({ title });

    if (users && users.length > 0) {
      await group.users().attach(users);
      await group.load('users');
    }

    return group;
  }

  async update({ request, params }) {
    const group = await Group.findOrFail(params.id);

    const { title, users } = request.only(['title', 'users']);

    group.merge({ title });

    await group.save();

    if (users && users.length > 0) {
      await group.users().sync(users);
      await group.load('users');
    }

    return group;
  }
}

module.exports = GroupController;
