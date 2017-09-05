import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cms-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {

  @Input() data;
  @Input() columns;
  @Output() gridAction: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit() {}


  action(type, action, id) {
    this.gridAction.emit({type: type, action: action, id: id});
  }


}
