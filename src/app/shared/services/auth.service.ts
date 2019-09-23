import { UserModel } from './../../login-page/shared/models/user-model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(user: UserModel): Promise<any> {
    // TODO
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
}
