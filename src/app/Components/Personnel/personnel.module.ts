import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from '../Personnel/personnel.component';



@NgModule({
  declarations: [
    PersonnelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonnelComponent
  ]
})
export class PersonnelModule { }
