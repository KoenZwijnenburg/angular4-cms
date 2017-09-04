import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsOverviewComponent } from './forms-overview/forms-overview.component';
import { NewFormComponent } from './new-form/new-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    FormsOverviewComponent,
    NewFormComponent,
    EditFormComponent
  ]
})
export class UserFormsModule {
}
