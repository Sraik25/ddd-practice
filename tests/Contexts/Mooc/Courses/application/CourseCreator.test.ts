import CourseCreator from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseNameLengthExceeded';
import { MotherCreator } from '../../../Shared/domain/MotherCreator';
import { CourseMother } from '../domain/CourseMother';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CreateCourseRequestMother } from './CreateCourseRequestMother';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const request = CreateCourseRequestMother.random();

    const course = CourseMother.fromRequests(request);

    await creator.run(request);

    repository.assertLastSavedCourseIs(course);
  });

  it('should throw error if course name length is exceeded', async () => {
    expect(() => {
      const request = CreateCourseRequestMother.invalidRequest();

      const course = CourseMother.fromRequests(request);

      creator.run(request);

      repository.assertLastSavedCourseIs(course);
    }).toThrow(CourseNameLengthExceeded);
  });
});

describe('CourseCreator2', () => {
  it('should create a valid course', async () => {
    const request = {
      id: '36d20509-b98f-476b-88f4-037d9ee256fc',
      duration: '2h 30m',
      name: MotherCreator.random().lorem.sentence()
    };

    console.log(request.name.length);

    await creator.run(request);
  });
});
