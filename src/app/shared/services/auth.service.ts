import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserModel } from './../../login-page/shared/models/user-model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: UserModel): Promise<any> {
    return new Promise<any>((resolve, reject) => {

      const url = 'https://5d88e429feddff0014e16120.mockapi.io/api/v1/login';

      const body = {
        email: user.Email,
        password: user.Password,
      };

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };

      this.http.post(url, body, httpOptions).toPromise().then((response) => {
        user.Token = (response as any).token;
        this.saveUserInLocalStorage(user);
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  public getUserName(): string {
    const userStringfied = localStorage.getItem('user');
    const userParsed = JSON.parse(userStringfied);
    return userParsed.email;
  }

  private saveUserInLocalStorage(user: UserModel): void {
    const userStringfied = JSON.stringify(user);
    localStorage.setItem('user', userStringfied);
  }
}
