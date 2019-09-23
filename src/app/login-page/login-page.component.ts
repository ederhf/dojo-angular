import { AuthService } from './../shared/services/auth.service';
import { UserModel } from './shared/models/user-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public user: UserModel;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  public login() {
    this.authService.login(this.user)
      .then((result) => {
        // All right
        this.router.navigate(['dashboard']);
      })
      .catch((result) => {
        // Something wrong didn't work
        alert(result.error.error);
      });
  }

}
