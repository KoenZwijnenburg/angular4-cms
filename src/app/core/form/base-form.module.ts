import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './base-form.component';
import { CreateFormService } from './create-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BaseFormComponent,
  ],
  exports: [
    BaseFormComponent,
  ],
  providers: [
    CreateFormService,
  ]
})
export class BaseFormModule { }
