import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosComponent } from './titulos.component';

describe('TitulosComponent', () => {
  let component: TitulosComponent;
  let fixture: ComponentFixture<TitulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitulosComponent]
    });
    fixture = TestBed.createComponent(TitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
