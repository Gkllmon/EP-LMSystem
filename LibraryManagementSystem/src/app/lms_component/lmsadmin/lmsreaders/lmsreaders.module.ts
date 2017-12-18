import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LmsreadersComponent } from './lmsreaders.component';
import { ReaderDisplayComponent } from './reader-display/reader-display.component';
import { ReaderDetailComponent } from './reader-detail/reader-detail.component';
import { ReaderSearchComponent } from './reader-search/reader-search.component';

import { LmsReadersRoutingModule } from './lmsreaders-routing.modules';
import { ReaderInfoComponent } from './reader-info/reader-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LmsReadersRoutingModule
  ],
  declarations: [
    LmsreadersComponent,
    ReaderDisplayComponent,
    ReaderDetailComponent,
    ReaderSearchComponent,
    ReaderInfoComponent
  ],
  providers: []
})
export class LmsReadersModule {}
