import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRetrieveComponent } from './book-retrieve.component';

describe('BookRetrieveComponent', () => {
  let component: BookRetrieveComponent;
  let fixture: ComponentFixture<BookRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
