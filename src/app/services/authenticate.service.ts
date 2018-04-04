import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticateService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  reviewPrivileges: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  adminPrivileges: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);


  setIsLoggedIn() {
    this.isLoggedIn.next(false);
  }

  setNotLoggedIn() {
    this.isLoggedIn.next(true);
  }

  constructor() { }

  getTheLoggedInUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.loggedInUser.next(user);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getReviewPrivileges(user: User) {
    this.reviewPrivileges.next(user.IsReviewer);
  }

  getAdminPrivileges(user: User) {
    this.adminPrivileges.next(user.IsAdmin);
  }
}
