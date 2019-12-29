import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSupprimerComponent } from './module-supprimer.component';

describe('ModuleSupprimerComponent', () => {
  let component: ModuleSupprimerComponent;
  let fixture: ComponentFixture<ModuleSupprimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleSupprimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
