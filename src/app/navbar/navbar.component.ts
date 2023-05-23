import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  res : any ;
  constructor(private Service : ServiceService){}
  who() {
    return localStorage.getItem('who');
  }
  Logged(){
    let resultat = localStorage.getItem('who');
    if (resultat)
    {
      this.res = this.who() ;
      return true ;
    }else{
      return false ;
    }
  }
  ngOnInit(){
  }
}
