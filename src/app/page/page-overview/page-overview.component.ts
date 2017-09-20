import { Component, OnDestroy, OnInit } from '@angular/core';
import { Page, PageService } from '../page.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { current } from 'codelyzer/util/syntaxKind';
import { Column } from '../../core/grid/grid.service';

@Component({
  selector: 'cms-page-overview',
  templateUrl: './page-overview.component.html',
  styleUrls: ['./page-overview.component.scss']
})
export class PageOverviewComponent implements OnInit, OnDestroy {

  public pages: Page[];
  columns: Column[];
  pageSubscription: Subscription;

  constructor(public pageService: PageService, public route: ActivatedRoute, public router: Router) {
  }

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
      {
        key: 'options',
        label: 'Options',
        type: 'options',
        options: [
          {
            type: 'click',
            action: 'delete',
            key: 'key'
          },
          {
            type: 'link',
            action: 'edit',
            key: 'key'
          }
        ]
      }
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


  optionsAction(event) {

    if (event.action === 'edit') {
      this.router.navigate(['edit', event.id], {relativeTo: this.route});
    }

    if (event.action === 'delete') {
      this.pageService.removePage(event.id);
    }

  }
}
