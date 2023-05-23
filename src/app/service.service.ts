import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor (private http : HttpClient){}

  DataCollect ()
  {
    return this.http.get ('http://localhost/Backend/count.php') ;
  }
  DataCollect1 ()
  {
    return this.http.get ('http://localhost/Backend/count1.php') ;
  }
  GetUsers() {
    return this.http.get ('http://localhost/Backend/users.php');
  }
  GetAdmins() {
    return this.http.get ('http://localhost/Backend/admins.php');
  }

  private url = 'http://localhost/Backend/register.php' ;
  RegisterInfo (info:any) {
    return this.http.post (this.url,info) ;
  }
  LoginInfo (info:any)
  {
    return this.http.post ('http://localhost/Backend/login.php',info);
  }
  ChangerD(info:any) {
    return this.http.post ('http://localhost/Backend/changer.php',info)
  }
  AddArticle(article:any)
  {
    return this.http.post('http://localhost/Backend/article.php',article);
  }
  GetArticles() {
    return this.http.get('http://localhost/Backend/get_articles.php');
  }
  GetNumbersArticles()
  {
    return this.http.get('http://localhost/Backend/number_products.php');
  } 
  BlockUser(info:any) 
  {
    return this.http.post('http://localhost/Backend/block_user.php',info);
  }
  GetAllOrders(id:any)
  {
    return this.http.post('http://localhost/Backend/orders.php',id);
  }
  SaveArticle(info:any)
  {
    return this.http.post('http://localhost/Backend/saveorder.php',info);
  }
}
