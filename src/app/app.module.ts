import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NcompComponent } from './ncomp/ncomp.component';
import { LoginComponent } from './login/login.component';
import { IndiaComponent } from './india/india.component';
import { IgraphComponent } from './igraph/igraph.component';
import { HealthconditionComponent } from './healthcondition/healthcondition.component';
import { GraphComponent } from './graph/graph.component';
import { GcountryComponent } from './gcountry/gcountry.component';
import { DateComponent } from './date/date.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
//import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule} from '@angular/flex-layout';

//import {MatSidenavContent} from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule} from '@angular/material/sidenav';

import { CommonModule } from "@angular/common";
import {NgxPaginationModule} from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
// import {AuthGuard} from 'src/app/auth.guard';
//import {MaterialModule} from '@angular/material';
//import { MaterialModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatNativeDateModule } from '@angular/material/core';  
import { MatCheckboxModule } from '@angular/material/checkbox';  
import { MatSelectModule } from '@angular/material/select';   



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NcompComponent,
    LoginComponent,
    IndiaComponent,
    IgraphComponent,
    HealthconditionComponent,
    GraphComponent,
    GcountryComponent,
    DateComponent,
    DashboardComponent,
    BookmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    //MatSidenavContent,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCheckboxModule,
    CommonModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSelectModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    MatFormFieldModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatCheckboxModule,  
    MatSelectModule  
  //   MaterialModule,            // <----- this module will be deprecated in the future version.
  //   MatDatepickerModule,        // <----- import(must)
  //   MatNativeDateModule,        // <----- import for date formating(optional)
  //   MatMomentDateModule 
  // //  MaterialModule

    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
