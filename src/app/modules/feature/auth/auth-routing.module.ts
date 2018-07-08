import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  LoginPageComponent,
  RegisterPageComponent
} from './components';

import { 
  AuthContainer 
} from './container';

const routes: Routes = [
  { 
    path: '', 
    component: AuthContainer,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LoginPageComponent
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
