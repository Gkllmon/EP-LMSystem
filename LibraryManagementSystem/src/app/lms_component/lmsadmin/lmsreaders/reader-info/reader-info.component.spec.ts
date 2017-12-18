import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderInfoComponent } from './reader-info.component';

describe('ReaderInfoComponent', () => {
  let component: ReaderInfoComponent;
  let fixture: ComponentFixture<ReaderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
