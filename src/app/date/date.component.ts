import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';  
import { DataService } from '../data.service';
import {DateService} from '../date.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [DatePipe]  
})
export class DateComponent implements OnInit {
  states2: any;
  stateName2: any;

  constructor(  
    private service: DataService,  
    private datepipe: DatePipe,  
    private dateService:DateService) { }  
    isMobileVersion: boolean;  
  date: any; 
  date2: any; 
  stateWiseData: any;  
  stateName: string;  
  selectedState: any; 
  selectedState2: any; 
  states: any;  
  population: number;  
  totalTested: number;  
  deltaTested: number;  
  totalConfirmed: number;  
  deltaConfirmed: number;  
  totalRecovered: number;  
  deltaRecovered: number;  
  totalDeceased: number;  
  deltaDeceased: number;  
  totalMigrated: number;  
  
  population2: number;  
  totalTested2: number;  
  deltaTested2: number;  
  totalConfirmed2: number;  
  deltaConfirmed2: number;  
  totalRecovered2: number;  
  deltaRecovered2: number;  
  totalDeceased2: number;  
  deltaDeceased2: number;  
  totalMigrated2: number;  

  resultpopulation: number;  
  resulttotalTested: number;  
  resultdeltaTested: number;  
  resulttotalConfirmed: number;  
  resultdeltaConfirmed: number;  
  resulttotalRecovered: number;  
  resultdeltaRecovered: number;  
  resulttotalDeceased: number;  
  resultdeltaDeceased: number;  
  resulttotalMigrated: number;  
  
  

  @ViewChild('btnShowModal', { static: false }) btnShowModal: ElementRef<HTMLElement>;  
  
  ngOnInit() {  
    
    this.selectedState = null;  
    this.selectedState2= null;
    this.date = new Date();  
    this.getStateData('');  
    this.getState1();
    this.getState2();  
  }  
  
  openModal(id: string) {  
    this.dateService.open(id);  
  }  
  
  closeModal(id: string) {  
    this.dateService.close(id);  
  }  
  
  getState1() {  
    this.states = this.service.getStates()  
    this.date = new Date();
  }  
  getState2(){
    this.states2 = this.service.getStates()  
    this.date2 = new Date();
  }
  getStateData(date: string) {  
    let value = (date == '') ? '' : '-' + date;  
    this.service.getStateData(value).subscribe(  
      response => {  
        this.stateWiseData = response;  
      }, error => {  
          
        this.getStateData('');  
      }  
    );  
  }  
  
  dateChangeCmnFun(date: Date){
    if (date > new Date()) {  
      this.getStateData('');  
    }  
    else if (this.datepipe.transform(date, 'yyyy-MM-dd') == this.datepipe.transform(new Date(), 'yyyy-MM-dd')) {  
      this.getStateData('');  
    }  
    else {  
      this.getStateData(this.datepipe.transform(date, 'yyyy-MM-dd'));  
    }
  }

  dateChanged() {  
    this.selectedState = null;  
    this.dateChangeCmnFun(this.date);  
  }  

  dateChanged2() {
    this.selectedState2 = null;
    this.dateChangeCmnFun(this.date2);
  }
  
  postDateFilter = (dt: Date): boolean => {  
    return dt <= new Date() && dt > new Date('2020-03-01');  
  }  
  
  onStateSelected() { 
    this.stateName = this.states.find(x => x.key == this.selectedState.key).name;  
    var data = this.stateWiseData[this.selectedState.key];  
    this.population = (data?.meta?.population == undefined) ? 0 : data?.meta?.population;  
    this.totalTested = (data?.total?.tested == undefined) ? 0 : data?.total?.tested;  
    this.deltaTested = data?.delta?.tested;  
    this.totalConfirmed = (data?.total?.confirmed == undefined) ? 0 : data?.total?.confirmed;  
    this.deltaConfirmed = data?.delta?.confirmed;  
    this.totalRecovered = (data?.total?.recovered == undefined) ? 0 : data?.total?.recovered;  
    this.deltaRecovered = data?.delta?.recovered;  
    this.totalDeceased = (data?.total?.deceased == undefined) ? 0 : data?.total?.deceased;  
    this.deltaDeceased = data?.delta?.deceased;  
    this.totalMigrated = (data?.total?.migrated == undefined) ? 0 : data?.total?.migrated;  
  }  
  
  onStateSelected2() {  
    this.stateName2 = this.states2.find(x => x.key == this.selectedState2.key).name;  
    var data = this.stateWiseData[this.selectedState2.key];  
    this.population2 = (data?.meta?.population == undefined) ? 0 : data?.meta?.population;  
    this.totalTested2 = (data?.total?.tested == undefined) ? 0 : data?.total?.tested;  
    this.deltaTested2 = data?.delta?.tested;  
    this.totalConfirmed2 = (data?.total?.confirmed == undefined) ? 0 : data?.total?.confirmed;  
    this.deltaConfirmed2 = data?.delta?.confirmed;  
    this.totalRecovered2 = (data?.total?.recovered == undefined) ? 0 : data?.total?.recovered;  
    this.deltaRecovered2 = data?.delta?.recovered;  
    this.totalDeceased2 = (data?.total?.deceased == undefined) ? 0 : data?.total?.deceased;  
    this.deltaDeceased2 = data?.delta?.deceased;  
    this.totalMigrated2 = (data?.total?.migrated == undefined) ? 0 : data?.total?.migrated;  
    this.getDifference();
  }

  report(stateCode: string, stateName: string) {  
    this.selectedState = null;  
    this.stateName = stateName;  
    var data = this.stateWiseData[stateCode];  
    this.population = (data?.meta?.population == undefined) ? 0 : data?.meta?.population;  
    this.totalTested = (data?.total?.tested == undefined) ? 0 : data?.total?.tested;  
    this.deltaTested = data?.delta?.tested;  
    this.totalConfirmed = (data?.total?.confirmed == undefined) ? 0 : data?.total?.confirmed;  
    this.deltaConfirmed = data?.delta?.confirmed;  
    this.totalRecovered = (data?.total?.recovered == undefined) ? 0 : data?.total?.recovered;  
    this.deltaRecovered = data?.delta?.recovered;  
    this.totalDeceased = (data?.total?.deceased == undefined) ? 0 : data?.total?.deceased;  
    this.deltaDeceased = data?.delta?.deceased;  
    this.totalMigrated = (data?.total?.migrated == undefined) ? 0 : data?.total?.migrated;  
    let el: HTMLElement = this.btnShowModal.nativeElement;  
    el.click();  
  }  
 getDifference(){
  this.resultpopulation = this.population - this.population2;  
  this.resulttotalTested = this.totalTested - this.totalTested2; 
  this.resultdeltaTested =   this.deltaTested - this.deltaTested2;
  this.resulttotalConfirmed = this.totalConfirmed -this.totalConfirmed2;    
  this.resulttotalRecovered = this.totalRecovered - this.totalRecovered2;
  this.resultdeltaRecovered = this.deltaRecovered - this.deltaRecovered2;
  this.resulttotalDeceased =   this.totalDeceased -this.totalDeceased2;
  this.resultdeltaDeceased = this.deltaDeceased - this.deltaDeceased2;
  this.resulttotalMigrated = this.totalMigrated - this.totalMigrated2;
 }
}

