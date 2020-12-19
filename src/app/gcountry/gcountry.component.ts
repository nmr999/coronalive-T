import { Component, OnInit ,Input,SimpleChanges} from '@angular/core';
import { from } from 'rxjs';
 import { DataService } from '../data.service';
import { SummaryData } from '../model';
@Component({
  selector: 'app-gcountry',
  templateUrl: './gcountry.component.html',
  styleUrls: ['./gcountry.component.css']
})
export class GcountryComponent implements OnInit {
  x:any;
  @Input() countryName: string;
  constructor(private service: DataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    this.getDataByCountryName(this.countryName);
  }

   ngOnInit() {
     

   }

   getDataByCountryName(countryName: String)
   {
   
 this.service.getcountryData().subscribe(
  response => {
       let summaryData: any= response;
       let countryData = summaryData.Countries.find(x => x.Slug == countryName);       
 
    const Xmax = Math.max(countryData.NewRecovered,countryData.TotalRecovered,
    countryData.NewConfirmed, countryData.TotalConfirmed,
    countryData.NewDeaths, countryData.TotalDeaths);
    const Xmin = Math.min(countryData.NewRecovered,countryData.TotalRecovered,
    countryData.NewConfirmed, countryData.TotalConfirmed,
    countryData.NewDeaths, countryData.TotalDeaths);
   
    this.barChartData=[{data:[], label: 'Countrywise,X axis--Features,Y axis--Figures'}];
    this.barChartData[0].data[0] = this.getNormalizedData(countryData.NewRecovered,Xmax,Xmin);
    this.barChartData[0].data[1] = this.getNormalizedData(countryData.TotalRecovered,Xmax,Xmin);
    this.barChartData[0].data[2] = this.getNormalizedData(countryData.NewConfirmed,Xmax,Xmin);
    this.barChartData[0].data[3] = this.getNormalizedData(countryData.TotalConfirmed,Xmax,Xmin);
    this.barChartData[0].data[4] = this.getNormalizedData(countryData.NewDeaths,Xmax,Xmin);
    this.barChartData[0].data[5] = this.getNormalizedData(countryData.TotalDeaths,Xmax,Xmin);
 
       }
 
       )
   }


 getNormalizedData(X : any,Xmax:any,Xmin:any)
 {
    //return ((X-Xmin)/(Xmax-Xmin));
    return X;
 }
  public barChartOptions:any = {
     scaleShowVerticalLines: false,
     responsive: true
   };

     public mbarChartLabels:string[] = ['New Recoverd', 'Total Recoverd', 'New confirmed', 'Total Confirmed', 'New Death', 'Total Deaths'];
     public barChartType:string = 'bar';
     public barChartLegend:boolean = true;
  
     public barChartColors:Array<any> = [
     {
       
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor:  [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
       pointBackgroundColor: 'rgba(2, 111, 73)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(77,20,96,1)'
 }
   ];
     public barChartData:any[] = [
       
    ];
  
 }  

