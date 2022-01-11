import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';

export class CourseMother {
  static create(id: CourseId, name: CourseName, duration: CourseDuration): Course {
    return new Course({ id, name, duration });
  }

  static fromRequests({ id, name, duration }: { id: string; name: string; duration: string }) {
    return this.create(new CourseId(id), new CourseName(name), new CourseDuration(duration));
  }
}
