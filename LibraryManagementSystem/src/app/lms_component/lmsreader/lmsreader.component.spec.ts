import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsreaderComponent } from './lmsreader.component';

describe('LmsreaderComponent', () => {
  let component: LmsreaderComponent;
  let fixture: ComponentFixture<LmsreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
