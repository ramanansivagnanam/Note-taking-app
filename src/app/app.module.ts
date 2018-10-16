import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MakenotesComponent } from './makenotes/makenotes.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BackendService } from './backend.service';
import { AuthendicationService } from './auth/authendication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MakenotesComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BackendService,AuthendicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
