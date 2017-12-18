import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lmsInfoRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(lmsInfoRoutes)
  ],
  exports: [RouterModule]
})
export class LmsInfoRoutingModule {}
