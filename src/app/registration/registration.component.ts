import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../user'
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  registerForm: FormGroup;
  user=new User();
  msg='';

  constructor(private _service: RegistrationService,private _router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
  });
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recieved"); 
        this._router.navigate(['/login'])
      },
      error=>{
        console.log("exception occured");
        this.msg=error.error;
      }

    )
  
    
  }
  gotologin(){
    this._router.navigate(["/login"])
  }

}
