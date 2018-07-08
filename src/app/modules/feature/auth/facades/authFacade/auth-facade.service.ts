import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  AuthService
} from '@app/shared/service/'

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(
    private authService: AuthService
  ) { }

  login(user: any): Observable<any> {
    const loginString = `?username=${user.email}&password=${user.password}`;

    return this.authService.login({
              user: user,
              params: loginString
            })  
  }

  signUp(user: any): Observable<any> {
    return this.authService.register(user)
  }
}
