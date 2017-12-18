import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsloginComponent } from './lmslogin.component';

describe('LmsloginComponent', () => {
  let component: LmsloginComponent;
  let fixture: ComponentFixture<LmsloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
