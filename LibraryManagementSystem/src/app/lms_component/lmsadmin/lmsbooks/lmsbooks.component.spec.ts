import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsbooksComponent } from './lmsbooks.component';

describe('LmsbooksComponent', () => {
  let component: LmsbooksComponent;
  let fixture: ComponentFixture<LmsbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
