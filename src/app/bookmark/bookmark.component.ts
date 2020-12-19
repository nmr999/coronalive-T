import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Bookmark } from '../bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  book: Array<Bookmark> = [];
  constructor(private ds : DataService) { }
  ngOnInit(): void {
    this.getyourBookmark();
  }
  getyourBookmark(){
    this.ds.getAllBookmark().subscribe(data=>{
      console.log(data);
      this.book=data;
      console.log(this.book);
    })
  }}