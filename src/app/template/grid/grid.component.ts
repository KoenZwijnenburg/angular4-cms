import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cms-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {

  @Input() data;
  @Input() columns;

  constructor() { }

  ngOnInit() {}

}
