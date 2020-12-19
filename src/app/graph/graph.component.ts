import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
 
  constructor(private service: DataService) { }

  ngOnInit() {


this.service.getData().subscribe(
response => {
            

  const Xmax = Math.max(response.Global.NewRecovered,response.Global.TotalRecovered,
  response.Global.NewConfirmed, response.Global.TotalConfirmed,
  response.Global.NewDeaths, response.Global.TotalDeaths);
  const Xmin = Math.min(response.Global.NewRecovered,response.Global.TotalRecovered,
  response.Global.NewConfirmed, response.Global.TotalConfirmed,
  response.Global.NewDeaths, response.Global.TotalDeaths);
 
  this.barChartData[0].data[0] = this.getNormalizedData(response.Global.NewRecovered,Xmax,Xmin);
  this.barChartData[0].data[1] = this.getNormalizedData(response.Global.TotalRecovered,Xmax,Xmin);
  this.barChartData[0].data[2] = this.getNormalizedData(response.Global.NewConfirmed,Xmax,Xmin);
  this.barChartData[0].data[3] = this.getNormalizedData(response.Global.TotalConfirmed,Xmax,Xmin);
  this.barChartData[0].data[4] = this.getNormalizedData(response.Global.NewDeaths,Xmax,Xmin);
  this.barChartData[0].data[5] = this.getNormalizedData(response.Global.TotalDeaths,Xmax,Xmin);

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
      pointBackgroundColor: 'rgba(234, 80, 60)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(234,80,60,1)'
}
  ];
    public barChartData:any[] = [
      {data:[], label: 'Global,X axis--Features,Y axis--Figures'}
   ];

  
 
}  
