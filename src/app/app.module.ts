import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ContenuComponent } from './contenu/contenu.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControleComponent } from './controle/controle.component';
import { NavbarDASHBOARDComponent } from './navbar-dashboard/navbar-dashboard.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { SettingComponent } from './setting/setting.component';
import { ArticlesComponent } from './articles/articles.component';
import { ListComponent } from './list/list.component';
import { UserspaceComponent } from './userspace/userspace.component' ;


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    ContenuComponent,
    NavbarComponent,
    WelcomeComponent,
    DashboardComponent,
    ControleComponent,
    NavbarDASHBOARDComponent,
    UsersComponent,
    AdminsComponent,
    SettingComponent,
    ArticlesComponent,
    ListComponent,
    UserspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
