import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UIModule
} from '@app/shared/ui/';

import { 
  AuthContainer 
} from './container';
import {
  LoginPageComponent,
  RegisterPageComponent
} from './components';
import {
  AuthFacade
} from './facades'

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    UIModule
  ],
  declarations: [
    AuthContainer,
    LoginPageComponent,
    RegisterPageComponent
  ],
  providers: [
    AuthFacade
  ]
})
export class AuthModule { }
