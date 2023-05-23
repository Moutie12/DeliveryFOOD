import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  constructor (private http : ServiceService,private router : Router){}
  id = localStorage.getItem('id');
  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');

  detaills = {
    id :this.id,
    name : this.name,
    email : this.email,
    password : this.password,  
  }
  changer() {
    this.http.ChangerD(this.detaills).subscribe(
      res=>{
        localStorage.clear();
        this.router.navigate(['/login']);
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
  
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

