import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsOverviewComponent } from './forms-overview/forms-overview.component';
import { NewFormComponent } from './new-form/new-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SharedModule } from '../core/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { BaseFormModule } from '../core/form/base-form.module';
import { UserFormService } from './user-form.service';
import { FormsModule } from '@angular/forms';
import { UserFormGridService } from './user-form.grid.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BaseFormModule,
    FormsModule
  ],
  declarations: [
    FormsOverviewComponent,
    NewFormComponent,
    EditFormComponent,
    UserFormComponent,
  ],
  providers: [
    UserFormService,
    UserFormGridService
  ]
})
export class UserFormsModule {
}
