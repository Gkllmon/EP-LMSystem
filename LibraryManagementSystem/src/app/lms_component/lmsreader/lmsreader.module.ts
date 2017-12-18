import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LmsReaderRoutingModule } from './lmsreader-routing.module';

import { LmsreaderComponent } from './lmsreader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BorrowSelectComponent } from './borrow-select/borrow-select.component';
import { BookDetailInfoComponent } from './book-detail-info/book-detail-info.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonDetailInfoComponent } from './person-detail-info/person-detail-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LmsReaderRoutingModule
  ],
  declarations: [
    LmsreaderComponent,
    NavbarComponent,
    FooterComponent,
    BorrowSelectComponent,
    BookDetailInfoComponent,
    PersonInfoComponent,
    PersonDetailInfoComponent
  ],
  providers: []
})
export class LmsReaderModule {}
