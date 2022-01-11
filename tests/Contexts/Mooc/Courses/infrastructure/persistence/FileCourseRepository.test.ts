import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseName } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import FileCourseRepository from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { Uuid } from '../../../../../../src/Contexts/Shared/domain/value-object/Uuid';

// describe('FileCourseRepository', () => {
//   it('should save a course', async () => {
//     const expectedCourse = new Course('id', 'name', 'duration');
//     const repository = new FileCourseRepository();

//     await repository.save(expectedCourse);

//     const course = await repository.search('id');

//     expect(course).toEqual(expectedCourse);
//   });
// });

describe('SaveCourse', () => {
  it('should have a course', async () => {
    const repository = new FileCourseRepository();
    const course = new Course({
      id: new Uuid('0766c602-d4d4-48b6-9d50-d3253123275e'),
      name: new CourseName('name'),
      duration: new CourseDuration('duration')
    });

    await repository.save(course);
  });
});
