import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    new Menu('Home', '/home', 'The home page'),
    new Menu('About', '/about', 'The about page'),
    new Menu('Users', 'users/list', 'The user list display'),
    new Menu('Vendors', 'vendors/list', 'The vendor list display'),
    new Menu('Products', 'products/list', 'The product list display'),
    new Menu('Purchase Requests', 'purchaserequests/list', 'The Purchase Request list display'),
    new Menu('Review', '/purchaserequests/needsreviewlist', 'Purchase Requests that need review'),
    new Menu('Login', '/users/login', 'The user login display')
  ];

  constructor() {}

  ngOnInit() {}
}
