import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../Content/content.component';
import { RouterModule } from '@angular/router';
import { ContentRoutingModule } from './content-routing.module';
import { EquipmentModule } from '../../Components/Equipment/equipment.module';
import { PersonnelModule } from '../../Components/Personnel/personnel.module';
import { SuppliesModule } from '../../Components/Supplies/supplies.module';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContentRoutingModule,
    EquipmentModule,
    PersonnelModule,
    SuppliesModule
  ],
  exports:[
    ContentComponent
  ]
})
export class ContentModule { }
