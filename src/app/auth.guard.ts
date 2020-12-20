import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import {RegistrationService} from 'src/app/registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:RegistrationService, private _router : Router ){ }
  canActivate():boolean{
    if(this._auth.loggedin()){
      return true
    }else{
     this._router.navigate(['/login'])
      return false
    }}
  }
