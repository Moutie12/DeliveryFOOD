import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable  } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  info = {
    name : "",
    email : "",
    password: "",
    adresse :""
  };
  k : any ;
t: any;
  constructor (private Service : ServiceService,private router : Router){}
  register() {
    console.log(this.info);
    this.Service.RegisterInfo(this.info).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
