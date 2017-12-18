import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LmsBooksRoutingModule } from './lmsbooks-routing.module';

import { LmsbooksComponent } from './lmsbooks.component';
import { BookRetrieveComponent } from './book-retrieve/book-retrieve.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookManageComponent } from './book-manage/book-manage.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LmsBooksRoutingModule
  ],
  declarations: [
    LmsbooksComponent,
    BookRetrieveComponent,
    BookListComponent,
    BookDetailComponent,
    BookManageComponent
  ],
  providers: []
})
export class LmsBooksModule {}
