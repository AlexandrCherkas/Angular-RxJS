import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { CarShellComponent } from './modules/cars/components/car-shell/car-shell.component';
import { UserShellComponent } from './modules/users/pages/user-shell/user-shell.component';
import { CreateUserShellComponent } from './modules/users/pages/create-user-shell/create-user-shell.component';
import { EditUserShellComponent } from './modules/users/pages/edit-user-shell/edit-user-shell.component';
import { LeaveEditUserFormGuard } from './core/guards/leave-edit-user-form.guard';
import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';
import { RegistrationShellComponent } from './modules/authorization/pages/registration-shell/registration-shell.component';
import { LoginShellComponent } from './modules/authorization/pages/login-shell/login-shell.component';


const routes: Routes = [
  {path : 'cars', component: CarShellComponent},
  {path : 'users', component: UserShellComponent},
  {path : 'create', component: CreateUserShellComponent },
  {path : 'user/edit/:id', component: EditUserComponent, canDeactivate : [LeaveEditUserFormGuard] },

  {path : 'registration', component: RegistrationShellComponent},
  {path : 'login', component: LoginShellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
