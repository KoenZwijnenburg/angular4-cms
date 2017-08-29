import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { SelectBox, TextArea, TextField } from '../../core/form/base-form-fields';

@Component({
  selector: 'cms-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent implements OnInit, OnDestroy {
  _page: any;

  formFields;
  showForm = false;
  @Input() newForm;

  @Input() set page(value) {
    this._page = value;
    if (value) {
      this.showForm = true;
      this.createFields(this._page.title, this._page.$key, this._page.body);
    }
  };

  @Input() submitButton;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {

    // @TODO is this the best solution?
    if(this.newForm) {
      this.showForm = true;
      this.createFields();
    }
  }

  ngOnDestroy() {
  }

  submit(e) {
    this.onSubmit.emit(e);
  }

  createFields(title = null, slug = null, body = null) {
    this.formFields = [
      new TextField({
        key: 'title',
        label: 'Title',
        required: true,
        value: title
      }),

      new TextField({
        key: 'slug',
        label: 'Slug',
        required: true,
        value: slug,
        minLength: 4,
      }),

      new TextArea({
        key: 'body',
        label: 'Body',
        value: body,
        required: true,
      })
    ];
  }
}
