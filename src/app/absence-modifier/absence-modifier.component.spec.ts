import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceModifierComponent } from './absence-modifier.component';

describe('AbsenceModifierComponent', () => {
  let component: AbsenceModifierComponent;
  let fixture: ComponentFixture<AbsenceModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
