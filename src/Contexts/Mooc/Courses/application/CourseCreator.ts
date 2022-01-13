import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { Course } from '../domain/Course';
import { CourseDuration } from '../domain/CourseDuration';
import { CourseName } from '../domain/CourseName';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';

export default class CourseCreator {
  constructor(private readonly repository: CourseRepository) {}

  async run(request: CourseCreatorRequest): Promise<void> {
    const course = new Course(
      new CourseId(request.id),
      new CourseName(request.name),
      new CourseDuration(request.duration)
    );

    return this.repository.save(course);
  }
}
