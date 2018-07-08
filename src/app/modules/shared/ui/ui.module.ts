import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { 
  NavbarComponent,
  LoginComponent,
  RegisterComponent
} from './components/';

export {
  NavbarComponent,
  LoginComponent,
  RegisterComponent
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  declarations: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class UIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModule
    };
  }
}
