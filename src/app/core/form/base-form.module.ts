import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './base-form/base-form.component';
import { CreateFormService } from './create-form.service';
import { ValidatorsDirective } from '../../pages/test-form/validators.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BaseFormComponent,
    ValidatorsDirective
  ],
  exports: [
    BaseFormComponent,
  ],
  providers: [
    CreateFormService,
  ]
})
export class BaseFormModule { }
