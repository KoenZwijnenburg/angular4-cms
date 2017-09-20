import { Injectable } from '@angular/core';
import { SelectBox, TextField, RadioButtons } from '../core/form/base-form-fields';
import { Column } from '../core/grid/grid.service';

@Injectable()
export class UserFormGridService {

  constructor() {
  }

  getOverviewColumsn(): Column[] {
    return [
      {
        key: '$key',
        label: 'ID'
      },
      {
        key: 'name',
        label: 'Name'
      },
      {
        key: 'created',
        label: 'Created at',
        type: 'date'
      },
      {
        key: 'options',
        label: 'Options',
        type: 'options',
        options: [
          {
            type: 'link',
            action: 'edit',
            key: 'slug'
          },
        ]
      }
    ];
  }

  getUserFormColumns(): Column[] {
    return [
      {
        key: 'key',
        label: 'Key',
      },
      {
        key: 'name',
        label: 'name',
      },
      {
        key: 'type',
        label: 'Type',
      },
      {
        key: 'label',
        label: 'Label',
      },
      {
        key: 'minLength',
        label: 'Min length',
      },
      {
        key: 'required',
        label: 'Required',
      },
      {
        key: 'options',
        label: 'Options',
        type: 'options',
        options: [
          {
            type: 'click',
            action: 'delete',
            key: 'key'
          },
          {
            type: 'link',
            action: 'edit',
            key: 'key'
          },
        ]
      }
    ];
  }

  getFormFieldSetup() {
    return [
      new TextField({
        key: 'name',
        label: 'name',
        required: true,
      }),

      new TextField({
        key: 'key',
        label: 'key',
        required: true,
        minLength: 4,
      }),
      new TextField({
        key: 'label',
        label: 'label',
        required: true,
        minLength: 4,
      }),
      new TextField({
        key: 'minLength',
        label: 'min length',
        required: true,
      }),
      new SelectBox({
        key: 'type',
        label: 'Type',
        options: [
          {key: 'input', value: 'input'},
          {key: 'textarea', value: 'textarea'},
          {key: 'checkbox', value: 'checkbox'},
          {key: 'selectbox', value: 'selectbox'},
          {key: 'radio', value: 'radio'},
        ]
      }),
      new RadioButtons({
        key: 'required',
        label: 'required',
        options: [
          {key: 'required', value: 'true'},
          {key: 'required', value: 'false'},
        ]
      })
    ];
  }
}
