export class FormField {
  controlType?: string;
  type?: string;
  key?: string;
  value?: any;
  label?: string;
  order?: number;
  className?: string;
  options?: Array<any>;
  required?: boolean;
  minLength?: number;
  customValidators?: Array<any>;
}


export class BaseFormFields extends FormField{

  constructor(options: FormField = {}) {
    super();

    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.customValidators = options.customValidators|| [];
    this.minLength = options.minLength || null;
  }
}

export class TextField extends BaseFormFields {
  controlType = 'input';

  constructor(options: any = {}) {
    super(options);

    this.type = 'text';
  }
}

export class TextArea extends BaseFormFields {
  controlType = 'textarea';

  constructor(options: any = {}) {
    super(options);
  }
}

export class SelectBox extends BaseFormFields {
  controlType = 'select';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

export class RadioButtons extends BaseFormFields {
  controlType = 'radio';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

export class Checkbox extends BaseFormFields {
  controlType = 'checkbox';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

