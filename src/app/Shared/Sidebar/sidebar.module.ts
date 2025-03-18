import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../Sidebar/sidebar.component';
import { MenuModule } from './Menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MenuModule
  ]
})
export class SidebarModule { }
