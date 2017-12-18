import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LmsadminComponent } from './lmsadmin.component';
import { LmsreadersComponent } from './lmsreaders/lmsreaders.component';
import { ReaderDisplayComponent } from './lmsreaders/reader-display/reader-display.component';
import { ReaderInfoComponent } from './lmsreaders/reader-info/reader-info.component';
import { ReaderDetailComponent } from './lmsreaders/reader-detail/reader-detail.component';
import { ReaderSearchComponent } from './lmsreaders/reader-search/reader-search.component';
import { LmsbooksComponent } from './lmsbooks/lmsbooks.component';
import { BookListComponent } from './lmsbooks/book-list/book-list.component';
import { BookManageComponent } from './lmsbooks/book-manage/book-manage.component';
import { BookDetailComponent } from './lmsbooks/book-detail/book-detail.component';
import { LmsinfoComponent } from './lmsinfo/lmsinfo.component';
import { BasicComponent } from './lmsinfo/basic/basic.component';
import { PasswordComponent } from './lmsinfo/password/password.component';


const lmsAdminRoutes: Routes = [
  {
    path: 'lmsadmin/:id',
    component: LmsadminComponent,
    children: [
      {
        path: 'lmsreaders',
        component: LmsreadersComponent,
        children: [
          {
            path: 'detail/:id',
            component: ReaderDetailComponent
          },
          {
            path: '',
            component: ReaderSearchComponent,
            children: [
              {
                path: 'display',
                component: ReaderDisplayComponent
              },
              {
                path: 'info/:readerid',
                component: ReaderInfoComponent
              }
            ]
          }
        ]
      },
      {
        path: 'lmsbooks',
        component: LmsbooksComponent,
        children: [
          {
            path: '',
            component: BookManageComponent,
            children: [
              {
                path: 'mbooks/:name',
                component: BookListComponent
              },
              {
                path: 'mdetail/:id',
                component: BookDetailComponent
              }
            ]
          }
        ]
      },
      {
        path: 'lmsinfo',
        component: LmsinfoComponent,
        children: [
          {
            path: '',
            component: BasicComponent
          },
          {
            path: 'password',
            component: PasswordComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(lmsAdminRoutes)
  ],
  exports: [RouterModule]
})
export class LmsAdminRoutingModule {}
