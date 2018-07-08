import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UIModule
} from '@app/shared/'

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardHomeComponent } from './components/';
import { DashboardContainer } from './container/';

@NgModule({
  imports: [
    CommonModule,
    UIModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardHomeComponent,
    DashboardContainer
  ]
})
export class DashboardModule { }
