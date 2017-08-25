import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Page } from '../page.service';

@Component({
  selector: 'cms-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent implements OnInit, OnChanges {

  pageForm: Page = {
    title: '',
    slug: '',
    body: ''
  };

  @Input() page;
  @Input() submitButton;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(changes.page && changes.page.currentValue) {
      this.pageForm = changes.page.currentValue;
    }
  }

  submit() {
    if (this.pageForm) {
      this.onSubmit.emit(this.pageForm);
    }

  }
}
