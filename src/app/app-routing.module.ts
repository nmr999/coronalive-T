import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthconditionComponent } from 'src/app/healthcondition/healthcondition.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { GcountryComponent } from './gcountry/gcountry.component';
import { GraphComponent } from './graph/graph.component';
import { IndiaComponent } from './india/india.component';
import { LoginComponent } from './login/login.component';
import { NcompComponent } from './ncomp/ncomp.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthGuard} from 'src/app/auth.guard';
import { HomeComponent } from './home/home.component';
import {PostGuard} from 'src/app/post.guard';


import { ProfileComponent } from './profile/profile.component';   


const routes: Routes = [

  {
    path:"",
    component:HomeComponent,
    canActivate:[PostGuard]

    
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[PostGuard]

  },
  {
    path:"login",
    component:LoginComponent,
    canActivate:[PostGuard]
  },
  {
    path:'register',
    component:RegistrationComponent,
    canActivate:[PostGuard]

  },
  {
  path:'dashboard',
  component:DashboardComponent,
  canActivate:[AuthGuard]
},
  {
  path:'healthcondition',
  component:HealthconditionComponent,
  canActivate:[AuthGuard]
  },
  {
    path:'ncomp',
    component:NcompComponent,
    canActivate:[AuthGuard]

  },
  {
  path:'india',
  component:IndiaComponent,
  canActivate:[AuthGuard]

  },
  {
    path:'graph',
    component:GraphComponent
    //canActivate:[AuthGuard]

  },
  {
    path:'gcountry',
    component:GcountryComponent
    //canActivate:[AuthGuard]

  },
  {
    path:'date',
    component:DateComponent,
    //canActivate:[AuthGuard]

  },
  {
    path:'bookmark',
    component:BookmarkComponent
   // canActivate:[AuthGuard]

  },
  {
    path:'profile',
    component:ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
