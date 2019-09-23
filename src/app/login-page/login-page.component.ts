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
    this.user = new UserModel();
  }

  public login() {
    this.authService.login(this.user)
      .then((result) => {
        // All right
        alert('Usuário logado com sucesso');
      })
      .catch((result) => {
        // Something wrong didn't work
        alert(result.error.error);
      });
  }

}
