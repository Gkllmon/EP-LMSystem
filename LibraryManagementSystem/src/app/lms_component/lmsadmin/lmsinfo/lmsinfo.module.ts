import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { LmsInfoRoutingModule } from './lmsinfo.routing.module';

import { LmsinfoComponent } from './lmsinfo.component';
import { BasicComponent } from './basic/basic.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LmsInfoRoutingModule
  ],
  declarations: [
    LmsinfoComponent,
    BasicComponent,
    PasswordComponent
  ],
  providers: []
})
export class LmsInfoModule {}
