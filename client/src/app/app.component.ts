import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isLoggedIn = false;

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      this.sessionThang.loggedIn$.subscribe((userFromApi) => {
          this.isLoggedIn = true;
      });

      this.sessionThang.checkLogin()
        // if logged in, redirect to /lists
        .then((userInfo) => {
            this.routerThang.navigate(['/lists']);
            this.isLoggedIn = true;
        })
        // else redirect to /
        .catch((err) => {
            this.routerThang.navigate(['/']);
        });
  }

  logMeOut() {
      this.sessionThang.logout()
        .then(() => {
            this.routerThang.navigate(['/']);
            this.isLoggedIn = false;
        })
        .catch(() => {});
  }

  handleLogin(userFromApi) {
      this.isLoggedIn = true;
  }
}