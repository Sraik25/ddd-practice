import { ValueObject } from '../../../Shared/domain/value-object/ValueObject';
import { CourseNameLengthExceeded } from './CourseNameLengthExceeded';

export class CourseName extends ValueObject<string> {
  constructor(value: string) {
    super(value);

    this.ensureLengthIsLessThen30Characters(value);
  }

  private ensureLengthIsLessThen30Characters(value: string): void {
    if (value.length > 30) {
      throw new CourseNameLengthExceeded(`The Course Name <${value}> has more than 30 characters`);
    }
  }
}
