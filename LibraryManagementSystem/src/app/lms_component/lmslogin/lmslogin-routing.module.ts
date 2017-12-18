import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LmsloginComponent } from './lmslogin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const lmsLoginRoutes: Routes = [
  {
    path: '',
    component: LmsloginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(lmsLoginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class LmsloginRoutingModule {}
