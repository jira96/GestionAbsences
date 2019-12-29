import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurModifierComponent } from './professeur-modifier.component';

describe('ProfesseurModifierComponent', () => {
  let component: ProfesseurModifierComponent;
  let fixture: ComponentFixture<ProfesseurModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
