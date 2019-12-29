import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleModifierComponent } from './module-modifier.component';

describe('ModuleModifierComponent', () => {
  let component: ModuleModifierComponent;
  let fixture: ComponentFixture<ModuleModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
