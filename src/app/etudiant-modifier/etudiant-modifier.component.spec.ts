import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantModifierComponent } from './etudiant-modifier.component';

describe('EtudiantModifierComponent', () => {
  let component: EtudiantModifierComponent;
  let fixture: ComponentFixture<EtudiantModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
