import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page, PageService } from '../page.service';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cms-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit, OnDestroy {

  public page: FirebaseObjectObservable<Page>;
  private pageId: string;
  public pageSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, public pageService: PageService) {
  }

  ngOnInit() {
    this.pageSubscription = this.route.params.subscribe(res => {

      this.pageId = res.id;

      this.pageService.getSinglePage(this.pageId).subscribe(res => {
        this.page = res;
      });
    })
  }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
  }

  editPage(data) {
    // @TODO You might want to use update if slug is not adjusted

    if (data) {
      this.pageService.removePage(this.pageId).then((response) => {
          this.pageService.newPage(data).then(onResolve => {
            if (onResolve) {
              this.router.navigate(['pages']);
            }
          });
        }
      );
    }
  }

}
