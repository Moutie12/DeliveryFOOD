import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent {
  constructor(private tab : ServiceService){}
  admins : any ;
  AfficherAdmins() {
    this.tab.GetAdmins().subscribe(
      res=>{
        this.admins = res ;
      },
      err=>{
        console.log(err);
      }
    );
  }
  ngOnInit() : void {
    this.AfficherAdmins() ;
  }
  IsLogged() {
    let tocken = localStorage.getItem('name');
    if (tocken){
      return true ;
    }else{
      return false ;
    }
  }
}
