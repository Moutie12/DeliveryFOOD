import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userspace',
  templateUrl: './userspace.component.html',
  styleUrls: ['./userspace.component.css']
})
export class UserspaceComponent {
    oders : any ;
    constructor(private Service : ServiceService,private router : Router){}
    LogOut() {
      localStorage.clear() ;
      this.router.navigate(['/login']);
    }
    GetOrders() {
      let id1 = localStorage.getItem('id');
      let info = {
        id : id1
      }
      let Orders = this.Service.GetAllOrders(info).subscribe(
        res=>{
          this.oders = res ;
        },
        err=>{
          console.log(err);
        }
      );
    }
    IsLogged() {
      let tocken = localStorage.getItem('name');
      if (tocken){
        return true ;
      }else{
        return false ;
      }
    }
    home() {
      this.router.navigate(['/']);
    }
    list() {
      this.router.navigate(['/list']);
    }
    ngOnInit() {
      this.GetOrders() ;
    }
}
