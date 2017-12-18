import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailInfoComponent } from './book-detail-info.component';

describe('BookDetailInfoComponent', () => {
  let component: BookDetailInfoComponent;
  let fixture: ComponentFixture<BookDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
