import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  constructor(private Service : ServiceService){}
  Article = {
    nom : "",
    image : ""
  }
  Add() {
    this.Service.AddArticle(this.Article).subscribe(
      res=>{
        this.Article.image="";
        this.Article.nom ="" ;
      },
      err=>{
      }
    );
  }
}
