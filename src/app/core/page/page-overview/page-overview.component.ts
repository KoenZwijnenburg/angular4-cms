import { Component, OnDestroy, OnInit } from '@angular/core';
import { Page, PageService } from '../page.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cms-page-overview',
  templateUrl: './page-overview.component.html',
  styleUrls: ['./page-overview.component.scss']
})
export class PageOverviewComponent implements OnInit, OnDestroy {

  public pages: Page[];
  pageSubscription: Subscription;

  constructor(public pageService: PageService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.pageSubscription = this.route.params.subscribe(() => {
        this.pageService.getPages().subscribe(res => {
          this.pages = res;
        });
      });
  }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
  }


  delete(id) {
    this.pageService.removePage(id);
  }
}
