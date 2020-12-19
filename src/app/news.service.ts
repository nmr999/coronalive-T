import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from './model/article';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  userKey : string = "71987d3449msh723604cd965c431p1f1faajsn742edfc4071f";
  constructor(private http : HttpClient) { }

  header = new HttpHeaders({
    "x-rapidapi-key": "71987d3449msh723604cd965c431p1f1faajsn742edfc4071f",
	  "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
  })

  getData(){
    let articleList : Array<Article>=[];
    this.http.get(`https://covid-19-news.p.rapidapi.com/v1/covid`,{headers : this.header})
    .subscribe(data => {
      console.log(data);
      for(let article of data["articles"]){
        let a = new Article();
        a.summary = article.summary;
        a.link = article.link;
        a.country = article.country;
        a.date=article.published_date;
        articleList.push(a);
      }

    })
    return articleList;
  }
}