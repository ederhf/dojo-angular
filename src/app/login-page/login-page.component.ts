import { AuthService } from './../shared/services/auth.service';
import { UserModel } from './shared/models/user-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public user: UserModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.user)
      .then((result) => {
        // All right
      })
      .catch((error) => {
        // Something wrong didn't work
      });
  }

}
