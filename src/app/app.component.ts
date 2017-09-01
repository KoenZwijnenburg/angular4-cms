import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user;
  loading: boolean = false;

  constructor(public loginService: LoginService) {
    this.checkUserLoggedIn();
  }

  signout() {
    this.user = false;
    return;
  }

  checkUserLoggedIn() {
    this.loading = true;
    this.loginService.user.subscribe(user => {
      this.loading = false;
      if (user) {
        this.user = user;
      } else {
        this.user = false;
      }
    });
  }
}
