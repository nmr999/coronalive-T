import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {RegistrationService} from 'src/app/registration.service';

@Injectable({
  providedIn: 'root'
})
export class PostGuard implements CanActivate {
  constructor(private _auth:RegistrationService, private _router : Router ){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._auth.loggedin()){
      this._router.navigate(['/dashboard']);
      return false;
    }
    else{
      return true;
    }
  }
  
}
