import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class ReviewerGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let user: User = JSON.parse(localStorage.getItem('currentUser'));
      if (user.IsReviewer) {
        return true;
      } else {
        return false;
      }
  }
}
