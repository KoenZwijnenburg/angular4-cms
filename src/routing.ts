import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { PageOverviewComponent } from './app/core/page/page-overview/page-overview.component';
import { NewPageComponent } from './app/core/page/new-page/new-page.component';
import { EditPageComponent } from './app/core/page/edit-page/edit-page.component';
import { OverviewComponent } from './app/overview/overview.component';
import { PageComponent } from './app/core/page/page.component';

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
];


