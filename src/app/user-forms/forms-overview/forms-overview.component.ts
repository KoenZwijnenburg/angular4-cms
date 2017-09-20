import { Component, OnInit } from '@angular/core';
import { Column, Option } from '../../core/grid/grid.service';
import { UserFormGridService } from '../user-form.grid.service';
import { UserFormService } from '../user-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cms-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.scss']
})
export class FormsOverviewComponent implements OnInit {

  columns: Column[];
  data;

  constructor(
    public userFormService: UserFormService,
    public userFormGridService: UserFormGridService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.columns = this.userFormGridService.getOverviewColumsn();

    this.userFormService.getAllForms().subscribe(res => {
      this.data = res;
    });
  }

  edit(e: Option) {
    this.router.navigate(['edit', e.id], {relativeTo: this.route});
  }
}
