import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 


  private _registerUrl ="http://localhost:8011/registeruser";
  private _loginUrl = "http://localhost:8011/login";

  constructor(private _http  : HttpClient, private _router :Router ) { }
  

       
  //{ observe: 'response'}).pipe(
    //map(
      //userData=>{
        //sessionStorage.setItem('email', user.emailId); )
  //)}
  
  
  public loginUserFromRemote(user :User):Observable<any> {

    return this._http.post<any>(this._loginUrl, user  )
  }
 
 public registerUserFromRemote(user :User):Observable<any>{

  return this._http.post<any>(this._registerUrl, user)
 
  }
  loggedin(){
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}

