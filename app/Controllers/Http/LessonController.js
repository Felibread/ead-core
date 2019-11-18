const Lesson = use('App/Models/Lesson');

class LessonController {
  async index({ params }) {
    const lessons = await Lesson.query()
      .where('course_id', params.courses_id)
      .with('course')
      .fetch();

    return lessons;
  }

  async store({ request, params }) {
    const data = request.only(['title', 'description', 'content']);

    const lesson = await Lesson.create({
      ...data,
      course_id: params.courses_id,
    });

    if (params.courses_id) {
      await lesson.load('course');
    }

    return lesson;
  }

  async update({ request, params }) {
    const lesson = await Lesson.findOrFail(params.id);

    const data = request.only(['title', 'description', 'content']);

    lesson.merge(data);

    await lesson.save();

    if (params.courses_id) {
      await lesson.load('course');
    }

    return lesson;
  }

  async show({ params }) {
    const lesson = await Lesson.findOrFail(params.id);

    if (params.courses_id) {
      await lesson.load('course');
    }

    return lesson;
  }

  async destroy({ params }) {
    const lesson = await Lesson.findOrFail(params.id);

    await lesson.delete();
  }
}

module.exports = LessonController;
