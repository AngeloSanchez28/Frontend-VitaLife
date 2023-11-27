import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionComponent } from './autenticacion.component';

describe('AutenticacionComponent', () => {
  let component: AutenticacionComponent;
  let fixture: ComponentFixture<AutenticacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticacionComponent]
    });
    fixture = TestBed.createComponent(AutenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
