import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelComponent } from './personnel.component';

const routes: Routes = [

    { path: '', component: PersonnelComponent },
    { path: 'maintenance', component: PersonnelComponent },
    { path: 'usage', component: PersonnelComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonnelRoutingModule { }
