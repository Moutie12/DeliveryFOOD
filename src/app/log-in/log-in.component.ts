import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  info = {
    email : "",
    password : ""
  }
  who : any ;
  informations :any ;
constructor(private tab : ServiceService,private router : Router){}
LogIn () {
  this.tab.LoginInfo(this.info).subscribe(
    res=>{
      this.informations = res ;
      if (this.informations['0'] == 'admin')
      {
        localStorage.setItem('who','admin');
        localStorage.setItem('id',this.informations['id']);
        localStorage.setItem('name',this.informations['name']);
        localStorage.setItem('email',this.informations['email']);
        localStorage.setItem('password',this.informations['password']);
        this.router.navigate(['/dashboard']);
      }else if (this.informations['0'] == 'user')
      {
        localStorage.setItem('who','user');
        localStorage.setItem('id',this.informations['id']);
        localStorage.setItem('name',this.informations['name']);
        localStorage.setItem('email',this.informations['email']);
        localStorage.setItem('password',this.informations['password']);
        this.router.navigate(['/userspace']);
      }else{
        console.log(this.informations);
      }
    },
    err=>{
      console.log(err);
    }
  );
}
}
