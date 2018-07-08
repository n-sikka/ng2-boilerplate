// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouteReuseStrategy } from '@angular/router';

/**
 * Core/Shared Modules
 */
import {
  CoreModule,
  UIModule,
  ServiceModule
} from '@app/shared/';

/**
 * Feature Modules
 */
import {
  AuthModule,
  UserModule,
  DashboardModule
} from '@app/feature/';

// App Config/APIs etc
import { API_CONFIG, ApiConfig } from  '@app/shared/core/';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    CoreModule.forRoot(),
    UIModule.forRoot(),
    ServiceModule,

    AuthModule,
    UserModule,
    DashboardModule,
    AppRoutingModule
  ],
  exports: [
    CoreModule,
    UIModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { 
      provide: API_CONFIG, 
      useValue: ApiConfig 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
