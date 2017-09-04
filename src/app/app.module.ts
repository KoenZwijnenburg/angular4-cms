import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routing';
import { LoginService } from './login/login.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BaseFormModule } from './core/form/base-form.module';
import { PageModule } from './core/page/page.module';
import { PageService } from './core/page/page.service';
import { UserFormsModule } from './user-forms/user-forms.module';
import { SharedModule } from './core/shared/shared.module';
import './core/shared/rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    OverviewComponent,
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
    FormsModule,
    PageModule,
    UserFormsModule,
    SharedModule
  ],
  providers: [
    LoginService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
