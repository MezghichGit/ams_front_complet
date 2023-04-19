import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlArticles = 'http://127.0.0.1:8080/articles';
  article: any;

  constructor(private Http: HttpClient) { }

  listArticles() {
    return this.Http.get(this.urlArticles + '/list');
  }


  createArticle(myform:any, id:any) {
    this.article = {
      'label': myform.value.articlelabel,
      'price': myform.value.articlePrice,
      'picture': myform.value.articlePicture
    }
    return this.Http.post(this.urlArticles + '/add/'+id, this.article);
  }

}
