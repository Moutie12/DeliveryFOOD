import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor (private tab : ServiceService){}

  listeUsers : any ;

  AffichageUsers() {
    this.tab.GetUsers().subscribe(
      res=>{
        this.listeUsers = res ;
        console.log(this.listeUsers);
      },
      err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() : void {
    this.AffichageUsers() ;
  }

  IsLogged() {
    let tocken = localStorage.getItem('name');
    if (tocken){
      return true ;
    }else{
      return false ;
    }
  }

  Block(info:any) {
    this.tab.BlockUser(info).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
