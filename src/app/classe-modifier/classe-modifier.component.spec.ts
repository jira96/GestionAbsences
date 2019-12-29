import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseModifierComponent } from './classe-modifier.component';

describe('ClasseModifierComponent', () => {
  let component: ClasseModifierComponent;
  let fixture: ComponentFixture<ClasseModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
