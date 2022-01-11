import CourseCreator from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
  let repository: CourseRepositoryMock;

  beforeEach(() => {
    repository = new CourseRepositoryMock();
  });

  it('should create a valid course', async () => {
    const creator = new CourseCreator(repository);

    const id = new Uuid('0766c602-d4d4-48b6-9d50-d3253123275e');
    const name = 'some-name';
    const duration = 'some-duration';

    const expectedCourse = new Course(id, name, duration);

    await creator.run({ id: id.value, name, duration });

    repository.assertSaveHaveBeenCalledWith(expectedCourse);
  });
});
