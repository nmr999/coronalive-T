import { Component } from '@angular/core';
import {RegistrationService} from './registration.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidtracker';
  constructor(private _auth: RegistrationService) {
  }
}
