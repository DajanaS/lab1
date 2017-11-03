import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StudentManagementService} from './student-management.service';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
