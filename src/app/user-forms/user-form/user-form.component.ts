import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { SelectBox, TextArea, TextField, RadioButtons, Checkbox } from '../../core/form/base-form-fields';
import { Column } from '../../core/grid/grid.service';
import { UserForm, UserFormService } from '../user-form.service';
import { UserFormGridService } from '../user-form.grid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {
  _form: any;
  formFields;
  columns: Column[];
  formName: string;
  userFormFields: UserForm[] = [];
  showFormFieldGenerator;

  @Input() newForm;

  @Input() set form(value) {
    this._form = value;
    if (value) {
      this.userFormFields = value.fields;
      this.formName = value.name;
    }
  };

  @Input() submitButton;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();


  constructor(public userFormService: UserFormService, public userFormGridService: UserFormGridService, private router: Router) {
    this.columns = userFormGridService.getUserFormColumns();
    this.formFields = this.userFormGridService.getFormFieldSetup();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  submit(e) {
    this.userFormFields.push(e);
    this.showFormFieldGenerator = false;
  }

  formFieldAction(event) {
    if (event.action === 'edit') {
      // @TODO edit form fields
    }

    if (event.action === 'delete') {
      this.userFormFields = this.userFormFields.filter(item => item.key !== event.id);
    }
  }

  deleteForm() {
    // @TODO add delete form button and make forms deletable
  }

  saveFormFields() {

    const form = {
      slug: this.formName.replace(/\s+/g, '-').toLowerCase(),
      name: this.formName,
      fields: this.userFormFields,
      created: new Date().toDateString()
    };


    if (form.slug && form.fields.length > 0) {

      if (!this.newForm) {
        // @TODO delete old form
      }

      this.userFormService.save(form).then(res => {
        this.router.navigate(['forms']);
      });
    }

  }
}
