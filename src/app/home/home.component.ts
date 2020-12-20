import { Component, OnInit } from '@angular/core';
import { SummaryData, CountryData, GlobalData } from '../model';  
import { DataService } from '../data.service';  
import { DatePipe } from '@angular/common';  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  summaryData: SummaryData;  
  currentDate: string;  


  constructor(private service: DataService, private datePipe: DatePipe) { }  

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
}
