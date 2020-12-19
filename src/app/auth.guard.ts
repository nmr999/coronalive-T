import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import {RegistrationService} from 'src/app/registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:RegistrationService, private router : Router ){ }
  canActivate():boolean{
    if(this.auth.loggedin()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
    
  }
  
