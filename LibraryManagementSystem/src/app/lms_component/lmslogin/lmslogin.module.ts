import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { LmsloginRoutingModule } from './lmslogin-routing.module';
import { LmsloginComponent } from './lmslogin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LmsloginRoutingModule
  ],
  declarations: [
    LmsloginComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: []
})
export class LmsLoginModule {}
