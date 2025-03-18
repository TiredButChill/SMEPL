import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../Sidebar/sidebar.component';
import { MenuModule } from './Menu/menu.module';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class SidebarModule { }
