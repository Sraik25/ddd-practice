import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';

export class CourseRepositoryMock implements CourseRepository {
  private saveMock: jest.Mock;

  constructor() {
    this.saveMock = jest.fn();
  }

  async save(course: Course): Promise<void> {
    this.saveMock(course);
  }

  assertLastSavedCourseIs(expected: Course): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }
}
