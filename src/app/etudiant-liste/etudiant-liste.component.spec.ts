import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantListeComponent } from './etudiant-liste.component';

describe('EtudiantListeComponent', () => {
  let component: EtudiantListeComponent;
  let fixture: ComponentFixture<EtudiantListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
