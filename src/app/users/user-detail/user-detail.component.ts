import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pagetitle: string = 'User Detail';
  user: User;

  constructor(private route: ActivatedRoute, private UserSvc: UserService, private router: Router) {}

  remove(): void {
    this.UserSvc.Remove(this.user).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/users/list');
    });
  }

  getUserById(id) {
    this.UserSvc.Get(id).subscribe(u => {
      this.user = u;
      console.log('User:', u);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      let id = p['id'];
      this.getUserById(id);
    });
  }
}
