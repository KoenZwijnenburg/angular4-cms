import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[cmsValidators]'
})
export class ValidatorsDirective {

  constructor() { }

}

export function forbiddenNameValidator(name:string){

    if(name === 'bob') {
      return {'forbiddenName': {value: 'Bob is taken'}};
    }
}
