import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAjouterComponent } from './etudiant-ajouter.component';

describe('EtudiantAjouterComponent', () => {
  let component: EtudiantAjouterComponent;
  let fixture: ComponentFixture<EtudiantAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
