import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from '../Personnel/personnel.component';
import { PersonnelRoutingModule } from './personnel-routing.module';




@NgModule({
  declarations: [
    PersonnelComponent
  ],
  imports: [
    CommonModule,
    PersonnelRoutingModule
  ],
  exports: [
    PersonnelComponent
  ]
})
export class PersonnelModule { }
