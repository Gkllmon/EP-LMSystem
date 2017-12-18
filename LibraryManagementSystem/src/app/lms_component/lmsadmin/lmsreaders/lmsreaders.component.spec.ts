import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsreadersComponent } from './lmsreaders.component';

describe('LmsreadersComponent', () => {
  let component: LmsreadersComponent;
  let fixture: ComponentFixture<LmsreadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsreadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsreadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
