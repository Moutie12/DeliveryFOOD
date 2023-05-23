import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDASHBOARDComponent {
  constructor(private router : Router){}
  name = localStorage.getItem('name');
  LogOut() 
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  home() {
    this.router.navigate(['/']);
  }
}
