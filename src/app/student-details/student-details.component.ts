import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input('inputStudent')
  public currentStudent: Student;

  constructor() {
  }

  ngOnInit() {
  }

}
