import { Component, OnDestroy, OnInit } from '@angular/core';
import { Page, PageService } from '../page.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Column } from '../../../template/grid/grid.service';

@Component({
  selector: 'cms-page-overview',
  templateUrl: './page-overview.component.html',
  styleUrls: ['./page-overview.component.scss']
})
export class PageOverviewComponent implements OnInit, OnDestroy {

  public pages: Page[];
  columns: Column[];
  pageSubscription: Subscription;

  constructor(public pageService: PageService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.columns = [
      {
        key: '$key',
        label: 'ID'
      },
      {
        key: 'title',
        label: 'Title'
      },
      {
        key: 'dateCreated',
        label: 'Date created',
        type: 'date'
      },
      {
        key: 'dateEdited',
        label: 'Date edited',
        type: 'date'
      },
    ];

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
