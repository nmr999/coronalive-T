import { Component, OnInit } from '@angular/core';
import {NgForm, Validators, FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import{MatDialog} from '@angular/material/dialog'
import { User } from 'src/app/user';
import { RegistrationService } from 'src/app/registration.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();
  msg='';
  loginForm: FormGroup;
  
  constructor(private _auth :RegistrationService,private _router:Router,private formBuilder: FormBuilder) { }

  //username: string;
  //password: string;
  ngOnInit(): void{
  }

  loginUser(){
    this._auth.loginUserFromRemote(this.user).subscribe(
      data=>{
        
        console.log("response recieved");
        localStorage.setItem('token',data.token)
        this._router.navigate(['/dashboard'])
    },
      error=>{
        console.log("error occured");
    this.msg='Invalid Credentials!!';
     }


    )
     
  }
  

//loginUser(){
  //  this._service.loginUserFromRemote(this.user).subscribe(
      
    //  data => {
      //  console.log("result",data);
        
        //alert(data.message);
        //this._router.navigate(['/home'])

    //},
      //error =>{console.log("exception occured");
      //this.msg = "Bad Credentials , please enter valid email id and password"

  //}
      

    //)
    
  //}



  gotoregister(){
    this._router.navigate(["/register"])
  }
}


