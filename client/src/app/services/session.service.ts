import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; //only if you want to redirect somebody
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../environments/environment';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SessionService {
  baseUrl: string = environment.apiUrl;

  private loggedInSource = new Subject<any>();

  loggedIn$ = this.loggedInSource.asObservable();
  // app component will subscribe to "loggedIn$"

  constructor(
    private myHttpThang: Http
  ) { }

  loggedIn (userInfo) {
      this.loggedInSource.next(userInfo);
  }

  checkLogin() {
      return this.myHttpThang
        .get(
          this.baseUrl + '/api/checklogin',
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  login(email, password) {
      return this.myHttpThang
        .post(
          this.baseUrl + '/api/login',
          {
            loginEmail: email,
            loginPassword: password
          },
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  signup(userInfo) {
      return this.myHttpThang
        .post(
          this.baseUrl + '/api/signup',
          userInfo,
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  logout() {
      return this.myHttpThang
        .post(
          this.baseUrl + '/api/logout',
          {},
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }


  handleError(e) {
    return Observable.throw(e.json().message);
  }
}
