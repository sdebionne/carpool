import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolFormComponent } from './carpool-form.component';

describe('CarpoolFormComponent', () => {
  let component: CarpoolFormComponent;
  let fixture: ComponentFixture<CarpoolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
