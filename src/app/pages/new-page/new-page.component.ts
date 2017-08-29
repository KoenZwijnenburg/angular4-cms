import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  constructor(public pageService: PageService, public router: Router) { }

  ngOnInit() {
  }

  newPage(data) {
    this.pageService.newPage(data).then(itemAdded => {
        if(itemAdded) {
          this.router.navigate(['pages']);
        }
      }
    );
  }

}
