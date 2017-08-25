import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './validators.directive';
import { Checkbox, SelectBox, TextArea, TextField } from '../../core/form/base-form-fields';

@Component({
  selector: 'cms-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent {

  formFields = [
    new TextField({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new TextField({
      key: 'emailAddress',
      label: 'Email',
      required:true,
      minLength: 4,
      type: 'email',
      order: 2
    }),

    new TextArea({
      key: 'test',
      label: 'Test question',
      value: 'No value',
      required: true,
      order:4
    }),

    new SelectBox({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3
    }),

    new Checkbox({
      key: 'hallo',
      label: 'Hallo checkbox',
      value: ['solid', 'unproven'],
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3
    }),
  ];

  constructor() {
  }

}
