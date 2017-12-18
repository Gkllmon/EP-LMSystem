import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderDisplayComponent } from './reader-display.component';

describe('ReaderDisplayComponent', () => {
  let component: ReaderDisplayComponent;
  let fixture: ComponentFixture<ReaderDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
