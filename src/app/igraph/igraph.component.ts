import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-igraph',
  templateUrl: './igraph.component.html',
  styleUrls: ['./igraph.component.css']
})
export class IgraphComponent implements OnInit {

  constructor(private service: DataService) { }

   ngOnInit() {


 this.service.getIndiaData().subscribe(
 response => {
      let summaryData: any= response;
      let indiaData = summaryData.Countries.find(x  => x.Slug == "india");       

   const Xmax = Math.max(indiaData.NewRecovered,indiaData.TotalRecovered,
   indiaData.NewConfirmed, indiaData.TotalConfirmed,
   indiaData.NewDeaths, indiaData.TotalDeaths);
   const Xmin = Math.min(indiaData.NewRecovered,indiaData.TotalRecovered,
   indiaData.NewConfirmed, indiaData.TotalConfirmed,
   indiaData.NewDeaths, indiaData.TotalDeaths);
  
   this.barChartData[0].data[0] = this.getNormalizedData(indiaData.NewRecovered,Xmax,Xmin);
   this.barChartData[0].data[1] = this.getNormalizedData(indiaData.TotalRecovered,Xmax,Xmin);
   this.barChartData[0].data[2] = this.getNormalizedData(indiaData.NewConfirmed,Xmax,Xmin);
   this.barChartData[0].data[3] = this.getNormalizedData(indiaData.TotalConfirmed,Xmax,Xmin);
   this.barChartData[0].data[4] = this.getNormalizedData(indiaData.NewDeaths,Xmax,Xmin);
   this.barChartData[0].data[5] = this.getNormalizedData(indiaData.TotalDeaths,Xmax,Xmin);

      }

      )
   }


 getNormalizedData(X:any,Xmax:any,Xmin:any)
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
       {data:[], label: 'Country,X axis--Features,Y axis--Figures'}
    ];
  
 }  
