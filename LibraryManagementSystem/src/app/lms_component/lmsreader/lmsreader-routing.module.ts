import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LmsreaderComponent } from './lmsreader.component';
import { BorrowSelectComponent } from './borrow-select/borrow-select.component';
import { BookDetailInfoComponent } from './book-detail-info/book-detail-info.component';
import { PersonDetailInfoComponent } from './person-detail-info/person-detail-info.component';

const lmsReaderRoutes: Routes = [
  {
    path: 'lmsreader/:id',
    component: LmsreaderComponent,
    children: [
      {
        path: 'personDetailInfo',
        component: PersonDetailInfoComponent
      },
      {
        path: 'borrowSelect',
        component: BorrowSelectComponent
      },
      {
        path: 'bookDetailInfo/:bookId',
        component: BookDetailInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(lmsReaderRoutes)
  ],
  exports: [RouterModule]
})
export class LmsReaderRoutingModule {}
