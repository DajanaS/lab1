import {Injectable} from '@angular/core';
import {Student} from './model/student';

@Injectable()
export class StudentManagementService {

  private STUDENTS = [
    new Student('Dajana', 'Stojchevska', 141178, 'KNI'),
    new Student('Student', 'Prezime', 145605, 'KNIA'),
    new Student('Ime', 'Student', 143308, 'PET'),
    new Student('St.', 'Pr.', 145329, 'IKI'),
  ];

  constructor() {
  }

  getStudents() {
    return this.STUDENTS;
  }
}
