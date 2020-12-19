import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 
  constructor(private _http  : HttpClient,private _router:Router) { }

  public loginUserFromRemote(user :User):Observable<any>{

    return this._http.post<any>("http://localhost:8011/login",user)
  }
  public registerUserFromRemote(user :User):Observable<any>{

    return this._http.post<any>("http://localhost:8011/registeruser",user)
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