import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOverviewComponent } from './page-overview/page-overview.component';
import { NewPageComponent } from './new-page/new-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { PageService } from './page.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PageFormComponent } from './page-form/page-form.component';
import { PageComponent } from './page.component';
import { BaseFormModule } from '../core/form/base-form.module';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  declarations: [
    PageOverviewComponent,
    NewPageComponent,
    EditPageComponent,
    PageFormComponent,
    PageComponent,
  ],
  imports: [
    BaseFormModule,
    CommonModule,
    HttpModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    NewPageComponent,
    PageOverviewComponent,
    EditPageComponent,
    PageComponent
  ],
  providers: [
    PageService,
  ]
})
export class PageModule {

}
