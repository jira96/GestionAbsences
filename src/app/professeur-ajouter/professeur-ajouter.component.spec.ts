import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurAjouterComponent } from './professeur-ajouter.component';

describe('ProfesseurAjouterComponent', () => {
  let component: ProfesseurAjouterComponent;
  let fixture: ComponentFixture<ProfesseurAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
