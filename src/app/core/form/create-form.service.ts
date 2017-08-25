import { Injectable } from '@angular/core';
import { BaseFormFields, FormField } from './base-form-fields';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CreateFormService {

  constructor() {
  }

  toFormGroup(formFields: FormField[]) {
    let group: any = {};

    formFields.forEach(field => {
      group[field.key] = this.controlFormSetter(field);
    });

    return new FormGroup(group);
  }

  controlFormSetter(field) {

    let value = field.value || '';
    let validators = [];

    if (field.required) {
      validators.push(Validators.required);
    }

    if (field.minLength) {
      validators.push(Validators.minLength(field.minLength));
    }

    if (field.customValidators && field.customValidators.length > 0) {
      for (let validator of field.customValidators) {
        validators.push(validator);
      }
    }

    if (field.controlType === 'checkbox') {
      let options: FormArray = new FormArray([]);

      for(let option of field.options) {
        let fg = new FormGroup({});
        let value = field.value.indexOf(option.key) !== -1;
        fg.addControl(option.key, new FormControl(value));
        options.push(fg);
      }

      return options;

    }

    return new FormControl(value, validators);
  }
}
