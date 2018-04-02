import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  pagetitle = 'User Login';
  user: User = new User(0, '', '', '', '', '', '', false, false, true);
  message: string = '';

  constructor(
    private UserSvc: UserService,
    private router: Router,
    private auth: AuthenticateService
  ) { }

  submit() {
    this.UserSvc.Login(this.user.UserName, this.user.Password).subscribe( res => {
      console.log('Before user set:', this.user);
      if (res.Result.toUpperCase() === 'SUCCESS') {
        this.user = res.Data;
        console.log('After user set:', this.user);
        console.log('Before Authentication Pass:', JSON.parse(localStorage.getItem('currentUser')));
        this.auth.getTheLoggedInUser(this.user);
        console.log('After Authentication pass', JSON.parse(localStorage.getItem('currentUser')));
        console.log('Login Successful:', res.Message);
        this.router.navigateByUrl('/home');
      } else {
        console.error('Login Failure:', res.Message);
        this.message = res.Message;
      }
    });
  }

  ngOnInit() {
    this.auth.logout();
  }

}
