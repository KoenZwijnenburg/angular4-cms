import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'cms-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit() {
    this.loginService.user.subscribe(user => {
      if(!user) {
        this.router.navigate(['login'])
      }
    });
  }

  logout(){

  }

}
