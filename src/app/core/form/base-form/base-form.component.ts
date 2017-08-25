import { Component, Input, OnInit } from '@angular/core';
import { BaseFormFields, FormField } from '../base-form-fields';
import { FormGroup } from '@angular/forms';
import { CreateFormService } from '../create-form.service';

@Component({
  selector: 'cms-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  @Input() formFields: FormField[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private createFormService: CreateFormService) {  }

  ngOnInit() {
    this.form = this.createFormService.toFormGroup(this.formFields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
