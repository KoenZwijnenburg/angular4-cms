import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  error:string;

  constructor(public loginService: LoginService, private router: Router) {
    loginService.user.subscribe(user => {
      if(user) {
        localStorage.setItem('login', user.uid);
        router.navigate(['']);
      }
    });
  }

  login() {
    if(this.loginForm.value) {
      this.loginService.login(this.loginForm.value).subscribe(res => {
        if(res.uid) {
          localStorage.setItem('login', res.uid);
          this.router.navigate(['']);
        }
      }, error => {
        this.error = error.message;
      });
    }
  }

  logout() {
    this.loginService.logout();
  }

  loginWithGoogle() {
    this.loginService.loginWithGoogle();
  }

}
