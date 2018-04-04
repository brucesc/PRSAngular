import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { AuthenticateService } from '../../services/authenticate.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    // new Menu('Home', '/home', 'The home page'),
    new Menu('About', '/about', 'The about page'),
    new Menu('Users', 'users/list', 'The user list display'),
    new Menu('Vendors', 'vendors/list', 'The vendor list display'),
    new Menu('Products', 'products/list', 'The product list display'),
    new Menu('Purchase Requests', 'purchaserequests/list', 'The Purchase Request list display'),
    new Menu('Review', '/purchaserequests/needsreviewlist', 'Purchase Requests that need review'),
    new Menu('Login', '/users/login', 'The user login display')
  ];

  user: User;
  constructor(private auth: AuthenticateService) {}

  ngOnInit() {
    this.auth.loggedInUser.subscribe( user => {
      this.user = user;
    });
  }
}
