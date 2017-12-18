import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowSelectComponent } from './borrow-select.component';

describe('BorrowSelectComponent', () => {
  let component: BorrowSelectComponent;
  let fixture: ComponentFixture<BorrowSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
