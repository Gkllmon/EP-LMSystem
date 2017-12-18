import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lmsReadersRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(lmsReadersRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class LmsReadersRoutingModule {}
