import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurSupprimerComponent } from './professeur-supprimer.component';

describe('ProfesseurSupprimerComponent', () => {
  let component: ProfesseurSupprimerComponent;
  let fixture: ComponentFixture<ProfesseurSupprimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurSupprimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
