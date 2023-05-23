import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component' ;
import { LogInComponent } from './log-in/log-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { SettingComponent } from './setting/setting.component';
import { ArticlesComponent } from './articles/articles.component';
import { ListComponent } from './list/list.component';
import { UserspaceComponent } from './userspace/userspace.component';

const routes: Routes = [
  { path : 'register' , component : RegisterComponent},
  { path : 'login' , component : LogInComponent},
  { path : '' , component :  WelcomeComponent},
  { path : 'dashboard' , component : DashboardComponent},
  { path : 'dashboard/users' , component : UsersComponent},
  { path : 'dashboard/admins' , component : AdminsComponent},
  { path : 'dashboard/setting' , component : SettingComponent},
  { path : 'dashboard/articles' , component : ArticlesComponent},
  { path : 'list' , component : ListComponent },
  { path : 'userspace' , component : UserspaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
