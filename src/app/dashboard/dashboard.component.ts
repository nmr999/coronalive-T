import { Component, OnInit } from '@angular/core';
// import { SearchService } from '../search.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
// import { LoaderService } from '../loader.service';
import { from } from 'rxjs/internal/observable/from';
import { SummaryData, CountryData, GlobalData } from '../model';  
import { DataService } from '../data.service';  
import { DatePipe } from '@angular/common';  
import {HttpClient} from '@angular/common/http';
import {Bookmark} from '../bookmark';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  summaryData: SummaryData;  
  selectedCountryData: CountryData;  
   
  currentDate:any;  
  gd : GlobalData
  
  constructor(private service: DataService, private datePipe: DatePipe, private _http: HttpClient) { }  
  
  ngOnInit() {  
    let date = new Date();  
    this.currentDate = this.datePipe.transform(date,'dd-MMM-yyyy');  
    this.getAllData();  



    
  }  
  
  getAllData() {  
    this.service.getData().subscribe(  
      response => {  
        this.summaryData = response;  
        
      }  
    )  
  }  
  

  addBookmark(){
    let bookmark = new Bookmark()
    bookmark.new_Recovered = this.gd.NewRecovered;
    bookmark.total_Recovered = this.gd.TotalRecovered;
    bookmark.new_Confirmed = this.gd.NewConfirmed;
    bookmark.total_Confirmed = this.gd.TotalConfirmed;
    bookmark.new_Deaths = this.gd.NewDeaths;
    bookmark.total_Deaths = this.gd.TotalDeaths;
    bookmark.username = "soumya";
    this._http.post(`http://localhost:8000/addtoyourbookmark/saveBookmark` ,bookmark).toPromise().then(data =>{
      console.log(data);
    })
  }
 
  
  
}  
