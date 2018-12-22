import { Component, OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // users: User[];
  // users$: Observable<User[]> = new Observable<User[]>(null);
  constructor(private userSvc: UserService) { }

  ngOnInit() {
    // this.users$.subscribe(result => {
    //   this.users = result;
    // });
  }

  // search(term: any): void {
  //   // const input: any = document.getElementById('search');
  //   // console.log(input);
  //   // this.users$ = Observable.fromEvent(input, 'keyup')
  //   // .do(() => console.log(input.value))
  //   // .switchMap(() => this.userSvc.searchByUserName(input.value));
  //   console.log(term);
  //   if (term.length > 2) {
  //     this.userSvc.searchByUserName(term).subscribe(result => {
  //       this.users$ = result;
  //     });
  //   }
  // }
}
