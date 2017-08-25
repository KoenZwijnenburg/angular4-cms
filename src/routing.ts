import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { OverviewComponent } from './app/overview/overview.component';
import { PagesComponent } from './app/pages/pages.component';
import { NewsComponent } from './app/news/news.component';
import { LoggedInComponent } from './app/template/logged-in/logged-in.component';
import { NewPageComponent } from './app/pages/new-page/new-page.component';
import { SinglePageComponent } from './app/pages/single-page/single-page.component';
import { EditPageComponent } from './app/pages/edit-page/edit-page.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    component: LoggedInComponent,
    children: [
      { path: '',      component: OverviewComponent },
      {
        path: 'pages',
        children: [
          { path: '',      component: PagesComponent },
          { path: 'new',      component: NewPageComponent },
          { path: ':id',      component: SinglePageComponent },
          { path: ':id/edit',      component: EditPageComponent },
        ]
      },
      { path: 'news', component: NewsComponent }
    ]
  },

];


export const pageRoutes = [

];
