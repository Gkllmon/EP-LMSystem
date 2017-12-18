import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookRetrieveComponent } from './lms_component/lmsadmin/lmsbooks/book-retrieve/book-retrieve.component';
import { BookListComponent } from './lms_component/lmsadmin/lmsbooks/book-list/book-list.component';


const routes: Routes = [
  {
    path: '',
    component: BookRetrieveComponent
  },
  {
    path: 'mbooks/:name',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
