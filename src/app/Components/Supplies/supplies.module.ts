import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliesComponent } from '../Supplies/supplies.component';
import { SuppliesRoutingModule } from './supplies-routing.module';


@NgModule({
  declarations: [
    SuppliesComponent
  ],
  imports: [
    CommonModule,
    SuppliesRoutingModule
  ],
  exports: [
    SuppliesComponent
  ]
})
export class SuppliesModule { }
