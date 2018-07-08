import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  UserContainer
} from './container/'

import {
  UserHomeComponent
} from './components/'

const routes: Routes = [
  {
    path: '',
    component: UserContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
