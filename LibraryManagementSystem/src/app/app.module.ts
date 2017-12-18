import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Ng2PaginationModule } from 'ng2-pagination';
import { AppRoutingModule } from './app-routing.module';
import { LmsAdminModule } from './lms_component/lmsadmin/lmsadmin.module';
import { LmsLoginModule } from './lms_component/lmslogin/lmslogin.module';
import { LmsReaderModule } from './lms_component/lmsreader/lmsreader.module';

import { UserService } from './lms_service/user.service';
import { BookService } from './lms_service/book.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    Ng2PaginationModule,
    AppRoutingModule,
    LmsAdminModule,
    LmsReaderModule,
    LmsLoginModule
  ],
  providers: [UserService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
