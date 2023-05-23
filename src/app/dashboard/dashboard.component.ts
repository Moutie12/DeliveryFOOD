import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor (private Service : ServiceService){}
  admins :any ;
  users : any ;
  AfficherAdmins() {
    this.Service.DataCollect().subscribe(
      res=>{
        this.admins = res ;
      },
      err=>{
        console.log(err);
      }
    ) ;
  }
  AfficherUsers() {
    this.Service.DataCollect1().subscribe(
      res=>{
        this.users = res ;
      },
      err=>{
        console.log(err);
      }
    ) ;
  }
  ngOnInit() : void {
    this.AfficherAdmins();
    this.AfficherUsers() ;
    this.NumberArticles() ;
  }
  IsLogged() {
    let tocken = localStorage.getItem('name');
    if (tocken){
      return true ;
    }else{
      return false ;
    }
  }
  Number :any ;
  NumberArticles() {
    this.Service.GetNumbersArticles().subscribe(
      res=>{
        this.Number = res ;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
