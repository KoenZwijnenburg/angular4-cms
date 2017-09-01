import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public customer: string = 'Test';
  @Output() signout: EventEmitter<any> = new EventEmitter();

  constructor(public loginService: LoginService, private router: Router) {
  }

  ngOnInit() { }

  logout() {
    this.loginService.logout();
    this.signout.emit(true);
  }

}
