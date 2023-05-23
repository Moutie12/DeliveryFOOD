import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private Service : ServiceService){}
  Articles : any ;
  Get() {
    this.Service.GetArticles().subscribe(
      res=>{
        this.Articles = res ;
      },
      err=>{
      }
    );
  }
  save(idarticle:any) {
    let iduser = localStorage.getItem('id');
    let info = {
      idarticle : idarticle ,
      iduser : iduser 
    }
    this.Service.SaveArticle(info).subscribe(
      res=>{
        console.log(res);
        window.alert('commande ajouté avec success');
      },
      err=>{
        console.log(err);
      }
    );
  }
  ngOnInit() :void {
    this.Get();
    if (this.LogIn() == false)
    {
      window.alert('vous devez connecter à votre compte pour commander un produit');
    }
  }
  LogIn() {
    let info  = localStorage.getItem('name');
    if (info) 
    {
      return true ;
    }else{
      return false;
    }
  }


}
