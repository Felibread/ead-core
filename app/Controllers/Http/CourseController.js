const Course = use('App/Models/Course');

class CourseController {
  async index() {
    const courses = await Course.query()
      .with('lessons')
      .fetch();

    return courses;
  }

  async show({ params }) {
    const course = await Course.findOrFail(params.id);

    await course.load('lessons');

    return course;
  }

  async store({ request }) {
    const { title, description, groups } = request.only([
      'title',
      'description',
      'groups',
    ]);

    const course = await Course.create({ title, description });

    if (groups && groups.length > 0) {
      await course.groups().attach(groups);
      await course.load('groups');
    }

    return course;
  }

  async update({ request, params }) {
    const course = await Course.findOrFail(params.id);

    const { groups, title, description } = request.only([
      'title',
      'description',
      'groups',
    ]);

    course.merge({ title, description });

    await course.save();

    if (groups && groups.length > 0) {
      await course.groups().sync(groups);
      await course.load('groups');
    }

    return course;
  }

  async destroy({ params }) {
    const course = await Course.findOrFail(params.id);

    await course.delete();
  }
}

module.exports = CourseController;
