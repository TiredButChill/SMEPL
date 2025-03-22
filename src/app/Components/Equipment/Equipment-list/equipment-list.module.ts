import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentListComponent } from './equipment-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EquipmentListComponent }
];

@NgModule({
  declarations: [
    EquipmentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    EquipmentListComponent
  ]
})
export class EquipmentListModule { }
