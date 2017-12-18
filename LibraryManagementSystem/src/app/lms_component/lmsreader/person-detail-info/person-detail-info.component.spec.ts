import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailInfoComponent } from './person-detail-info.component';

describe('PersonDetailInfoComponent', () => {
  let component: PersonDetailInfoComponent;
  let fixture: ComponentFixture<PersonDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
