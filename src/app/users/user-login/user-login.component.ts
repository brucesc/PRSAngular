import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User(0, '', '', '', '', '', '', false, false, true);
  message: string = '';

  constructor(
    private UserSvc: UserService,
    private router: Router
  ) { }

  submit() {
    this.UserSvc.Login(this.user.UserName, this.user.Password).subscribe( res => {
      if (res.Result.toUpperCase() === 'SUCCESS') {
        this.user = res.Data;
        console.log('Login Successful:', res.Message);
        this.router.navigateByUrl('/home');
      } else {
        console.error('Login Failure:', res.Message);
        this.message = res.Message;
      }
    });
  }

  ngOnInit() {
  }

}
