import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Article} from '../model/article';

@Component({
  selector: 'app-ncomp',
  templateUrl: './ncomp.component.html',
  styleUrls: ['./ncomp.component.css']
})
export class NcompComponent implements OnInit {
  articleList : Array<Article>=[];
  page:any;
  constructor(private ns : NewsService) { }

  ngOnInit(): void {
    this.articleList = this.ns.getData();
    // this.articleList.splice(0,1);
    
    // this.articleList.splice(1,1);
    // this.articleList.splice(5,1);
  }

}
