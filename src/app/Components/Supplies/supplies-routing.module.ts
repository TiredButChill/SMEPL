import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliesComponent } from './supplies.component';

const routes: Routes = [
  { path: '', component: SuppliesComponent },
  { path: 'import/export', component: SuppliesComponent },
  { path: 'inventory', component: SuppliesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliesRoutingModule { }
