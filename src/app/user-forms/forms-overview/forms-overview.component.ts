import { Component, OnInit } from '@angular/core';
import { Column } from '../../template/grid/grid.service';

@Component({
  selector: 'cms-forms-overview',
  templateUrl: './forms-overview.component.html',
  styleUrls: ['./forms-overview.component.scss']
})
export class FormsOverviewComponent implements OnInit {

  columns: Column[];
  data;

  constructor() {
  }

  ngOnInit() {
    this.columns = [
      {
        key: 'id',
        label: 'ID'
      },
      {
        key: 'name',
        label: 'name'
      },
      {
        key: 'created',
        label: 'Created at'
      }
    ];

    this.data = [
      {
        id: '1',
        name: 'form1',
        created: 'yesterday'
      },
      {
        id: '2',
        name: 'form2',
        created: 'yesterday'
      },
      {
        id: '1',
        name: 'form1',
        created: 'yesterday'
      },
      {
        id: '2',
        name: 'form2',
        created: 'yesterday'
      }
    ];
  }
}
