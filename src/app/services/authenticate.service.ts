import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticateService {

  // currentUser: User;

  constructor() { }

  getTheLoggedInUser(user: User) {
    // this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
