import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PageService } from './page.service';


@Component({
  selector: 'cms-page',
  template: '<router-outlet></router-outlet>'
})

export class PageComponent implements OnInit, OnDestroy {

  pageSubscription: Subscription;

  constructor(private route: ActivatedRoute, public pageService: PageService) {
  }

  ngOnInit() {
    this.pageSubscription = this.route.params.subscribe(params => {
      if (params.type === 'static') {
        this.pageService.pageType = 'pages';
      } else if (params.type === 'news') {
        this.pageService.pageType = 'news';
      }
    });
  }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
  }

}
