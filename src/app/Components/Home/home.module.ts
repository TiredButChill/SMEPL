import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Home/home.component';
import { ContentModule } from '../../Shared/Content/content.module';
import {SidebarModule} from '../../Shared/Sidebar/sidebar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    SidebarModule,
  ]
})
export class HomeModule { }
