import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsinfoComponent } from './lmsinfo.component';

describe('LmsinfoComponent', () => {
  let component: LmsinfoComponent;
  let fixture: ComponentFixture<LmsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
