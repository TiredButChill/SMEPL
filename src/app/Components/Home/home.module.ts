import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Home/home.component';
import { SidebarModule } from '../../Shared/Sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', loadChildren: () => import('../../Shared/Content/content.module').then(m => m.ContentModule)}
  ]},
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [HomeComponent],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
