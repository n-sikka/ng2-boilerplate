import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardContainer } from './container/';
import { DashboardHomeComponent } from './components/';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardHomeComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
