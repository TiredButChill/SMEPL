import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './equipment.component';

const routes: Routes = [
  { 
    path: '', 
    component: EquipmentComponent,
    children: [
      { 
        path: 'list', 
        loadChildren: () => import('./Equipment-list/equipment-list.module').then(m => m.EquipmentListModule) 
      },
      { path: 'maintenance', component: EquipmentComponent },
      { path: 'usage', component: EquipmentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
