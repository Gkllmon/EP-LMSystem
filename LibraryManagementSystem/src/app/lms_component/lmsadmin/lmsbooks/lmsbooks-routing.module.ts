import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const lmsBooksRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(lmsBooksRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class LmsBooksRoutingModule {}
