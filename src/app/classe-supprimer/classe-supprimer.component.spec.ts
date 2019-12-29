import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseSupprimerComponent } from './classe-supprimer.component';

describe('ClasseSupprimerComponent', () => {
  let component: ClasseSupprimerComponent;
  let fixture: ComponentFixture<ClasseSupprimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseSupprimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
