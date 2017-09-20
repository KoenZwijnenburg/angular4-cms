import { Routes } from '@angular/router';
import { PageOverviewComponent } from './app/page/page-overview/page-overview.component';
import { NewPageComponent } from './app/page/new-page/new-page.component';
import { EditPageComponent } from './app/page/edit-page/edit-page.component';
import { OverviewComponent } from './app/overview/overview.component';
import { PageComponent } from './app/page/page.component';
import { FormsOverviewComponent } from './app/user-forms/forms-overview/forms-overview.component';
import { NewFormComponent } from './app/user-forms/new-form/new-form.component';
import { EditFormComponent } from './app/user-forms/edit-form/edit-form.component';

export const appRoutes: Routes = [
  { path: '', component: OverviewComponent },
  {
    path: 'pages/:type',
    component: PageComponent,
    children: [
      {path: '', component: PageOverviewComponent},
      {path: 'new', component: NewPageComponent},
      {path: 'edit/:id', component: EditPageComponent},
    ]
  },
  {
    path: 'forms',
    children: [
      {path: '', component: FormsOverviewComponent},
      {path: 'new', component: NewFormComponent},
      {path: 'edit/:id', component: EditFormComponent},
    ]
  },
];


