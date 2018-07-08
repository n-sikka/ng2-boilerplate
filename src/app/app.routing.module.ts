import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
    AuthGuard
} from '@app/shared/service/'

import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full'
    },
    { 
        path: 'auth', 
        loadChildren: '@app/feature/auth/#AuthModule',
    },
    { 
        path: 'dashboard', 
        loadChildren: '@app/feature/dashboard/#DashboardModule',
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'users', 
        loadChildren: '@app/feature/user/#UserModule',
        canActivate: [ AuthGuard ],
        data: { key: 'users' }
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {}