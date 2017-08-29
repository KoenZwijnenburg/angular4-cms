import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { NewsComponent } from './news/news.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routing';
import { LoggedInComponent } from './template/logged-in/logged-in.component';
import { LoginService } from './login/login.service';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { PageService } from './pages/page.service';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PageFormComponent } from './pages/page-form/page-form.component';
import { BaseFormModule } from './core/form/base-form.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    OverviewComponent,
    NewsComponent,
    PagesComponent,
    LoggedInComponent,
    NewPageComponent,
    SinglePageComponent,
    PageFormComponent
  ],
  imports: [
    BrowserModule,
    BaseFormModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    LoginService,
    PageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
