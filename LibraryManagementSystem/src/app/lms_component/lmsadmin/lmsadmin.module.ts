import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LmsAdminRoutingModule } from './lmsadmin-routing.module';

import { LmsadminComponent } from './lmsadmin.component';
import { LmsBooksModule } from './lmsbooks/lmsbooks.module';
import { LmsReadersModule } from './lmsreaders/lmsreaders.module';
import { LmsInfoModule } from './lmsinfo/lmsinfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LmsAdminRoutingModule,
    LmsBooksModule,
    LmsReadersModule,
    LmsInfoModule
  ],
  declarations: [
    LmsadminComponent
  ],
  providers: []
})
export class LmsAdminModule {}
