import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurListeComponent } from './professeur-liste.component';

describe('ProfesseurListeComponent', () => {
  let component: ProfesseurListeComponent;
  let fixture: ComponentFixture<ProfesseurListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
