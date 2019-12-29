import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceSupprimerComponent } from './absence-supprimer.component';

describe('AbsenceSupprimerComponent', () => {
  let component: AbsenceSupprimerComponent;
  let fixture: ComponentFixture<AbsenceSupprimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceSupprimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
