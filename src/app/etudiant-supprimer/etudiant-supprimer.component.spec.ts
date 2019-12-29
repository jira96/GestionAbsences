import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantSupprimerComponent } from './etudiant-supprimer.component';

describe('EtudiantSupprimerComponent', () => {
  let component: EtudiantSupprimerComponent;
  let fixture: ComponentFixture<EtudiantSupprimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantSupprimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
