import { Component, OnInit } from '@angular/core';
import { Page, PageService } from './page.service';

@Component({
  selector: 'cms-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public pages: Page[];

  constructor(public pageService: PageService) { }

  ngOnInit() {
    this.pageService.getPages().subscribe(res => {
      this.pages = res;
    })
  }


  delete(id) {
    this.pageService.removePage(id);
  }

}
