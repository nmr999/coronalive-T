import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { Data, ChildData } from '../model';  

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  allData: Data[];  
  totalData: any;  
  selectedStateCode: string;  
  selectedDistrictCode: string;  
  stateData: any;  
  statewiseData: ChildData[];  
  districtData: any;  
  
  constructor(private service: DataService) { }  
  
  ngOnInit() {  
    this.getAllData();  
  }  
  
  getAllData() {  
    this.service.getAllData().subscribe(  
      response => {  
        this.allData = response.statewise;  
        this.totalData = this.allData.find(x => x.statecode == 'TT');  
        this.allData = this.allData.filter(x => x.statecode != 'TT' && x.statecode != 'UN');  
        this.getStateData1();  
      }  
    )  
  }  
  
  getStateData1() {  
    this.service.getStateData1().subscribe(  
      response => {  
        this.statewiseData = response;  
      }  
    )  
  }  
  
  onStateSelected() {  
    this.stateData = this.allData.find(x => x.statecode == this.selectedStateCode)  
    let stateCode = (this.selectedStateCode == 'LA') ? 'LK' : this.selectedStateCode;  
    this.districtData = this.statewiseData.find(x => x.id == `IN-${stateCode}`);  
  }  
}  