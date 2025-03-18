import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
    {path: '', component: ContentComponent,
        children: [
            {path: 'equipment', loadChildren: () => import('../../Components/Equipment/equipment.module').then(m => m.EquipmentModule)},
            {path: 'supplies', loadChildren: () => import('../../Components/Supplies/supplies.module').then(m => m.SuppliesModule)},
            {path: 'personnel', loadChildren: () => import('../../Components/Personnel/personnel.module').then(m => m.PersonnelModule)},
            {path: 'reports', loadChildren: () => import('../../Components/Reports/reports.module').then(m => m.ReportsModule)},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
    