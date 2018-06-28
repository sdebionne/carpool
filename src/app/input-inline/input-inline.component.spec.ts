import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInlineComponent } from './input-inline.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';

describe('InputInlineComponent', () => {
  let component: InputInlineComponent;
  let fixture: ComponentFixture<InputInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
      declarations: [ InputInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});