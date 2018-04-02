import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AuthenticateService } from '../../services/authenticate.service';
import { SortPipe } from '../../pipes/sort.pipe';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pagetitle: string = 'User List';
  users: User[];
  sortBy: string = 'Id';

  constructor(private UserSvc: UserService) {}

  setSortBy(column: string): void {
    this.sortBy = column;
  }

  ngOnInit() {
    this.UserSvc.List().subscribe(u => {
      console.log(u);
      this.users = u;
    });
  }
}
