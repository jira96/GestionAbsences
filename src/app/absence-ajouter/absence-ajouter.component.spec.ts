import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceAjouterComponent } from './absence-ajouter.component';

describe('AbsenceAjouterComponent', () => {
  let component: AbsenceAjouterComponent;
  let fixture: ComponentFixture<AbsenceAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
