
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolComponent } from './carpool.component';

describe('CarpoolComponent', () => {
  let component: CarpoolComponent;
  let fixture: ComponentFixture<CarpoolComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
