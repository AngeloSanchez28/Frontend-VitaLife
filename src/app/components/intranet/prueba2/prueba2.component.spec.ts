import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba2Component } from './prueba2.component';

describe('Prueba2Component', () => {
  let component: Prueba2Component;
  let fixture: ComponentFixture<Prueba2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Prueba2Component]
    });
    fixture = TestBed.createComponent(Prueba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
