
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerComponent } from './organizer.component';

describe('OrganizerComponent', () => {
  let component: OrganizerComponent;
  let fixture: ComponentFixture<OrganizerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
