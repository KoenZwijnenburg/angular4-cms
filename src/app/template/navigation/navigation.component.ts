import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public customer : string = 'Test';

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['login']);

  }

}
