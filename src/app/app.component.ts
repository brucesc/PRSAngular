import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn;

  constructor(private auth: AuthenticateService) {}

  ngOnInit() {
    this.auth.isLoggedIn.subscribe( bool => {
      this.isLoggedIn = bool;
    });
  }
}
