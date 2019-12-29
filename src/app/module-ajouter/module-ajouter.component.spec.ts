import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAjouterComponent } from './module-ajouter.component';

describe('ModuleAjouterComponent', () => {
  let component: ModuleAjouterComponent;
  let fixture: ComponentFixture<ModuleAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
