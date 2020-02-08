import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes

import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/user/manager/manager.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { UserComponent } from './components/user/user/user.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'admin', component: AdminComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
