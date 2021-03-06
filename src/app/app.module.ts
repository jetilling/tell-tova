import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }      from '@angular/forms';
import { HttpModule, JsonpModule }       from '@angular/http';

//Components
import { LandingPageComponent } from './landingPage/landing-page.component';
import { LoginComponent }       from './auth/login/login.component';
import { SignupComponent }      from './auth/signup/signup.component';
import { AboutComponent }       from './about/about.component';
import { ContactComponent }     from './contact/contact.component';
import { NewsComponent }        from './news/news.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AuthComponent }        from './auth/auth.component';
import { ProfileComponent }     from './profile/profile.component';

//Routing
import { AppRoutingModule }        from './app-routing.module';

//Services
import { AuthService, AlertService }          from './services/index';
import { CommonFunctions }                    from './services/commonFunctions.service';
import { DashboardService }                   from './services/dashboard.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    DashboardComponent,
    AuthComponent,
    ProfileComponent
  ],
  providers: [
    AuthService,
    AlertService,
    CommonFunctions,
    DashboardService
  ],
  bootstrap: [ LandingPageComponent ]
})

export class AppModule {}
