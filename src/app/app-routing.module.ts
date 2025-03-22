import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { LoginComponent } from './Components/Login/login.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./Components/Home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
