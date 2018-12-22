import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:63522/Users/';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  List(): Observable<User[]> {
    return this.http.get(url + 'List') as Observable<User[]>;
  }

  Get(id): Observable<User> {
    return this.http.get(url + 'Get/' + id) as Observable<User>;
  }

  Create(user: User): Observable<any> {
    return this.http.post(url + 'Create', user) as Observable<any>;
  }

  Change(user: User): Observable<any> {
    return this.http.post(url + 'Change', user) as Observable<any>;
  }

  Remove(user: User): Observable<any> {
    return this.http.post(url + 'Remove', user) as Observable<any>;
  }

  Login(username: string, password: string): Observable<any> {
    return this.http.get(url + 'Login/' + username + '/' + password) as Observable<any>;
  }

  searchByUserName(term: string): Observable<any> {
    if (!term) {
      return Observable.of([]);
  }
    return this.http.get(url + 'SearchByName?name=' + term) as Observable<any>;
  }
}
