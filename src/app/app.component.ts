import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user;

  constructor(public loginService: LoginService) {
    this.checkUserLoggedIn();
  }

  signout() {
    this.user = false;
    return;
  }

  checkUserLoggedIn() {
    this.loginService.user.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }
}
