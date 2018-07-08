import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UIModule
} from '@app/shared/'

import { UserRoutingModule } from './user-routing.module';

import {
  UserContainer
} from './container/'

import {
  UserHomeComponent
} from './components/';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UIModule
  ],
  declarations: [
    UserContainer, 
    UserHomeComponent
  ]
})
export class UserModule { }
