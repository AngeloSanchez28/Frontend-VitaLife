import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIntranetComponent } from './footer-intranet.component';

describe('FooterIntranetComponent', () => {
  let component: FooterIntranetComponent;
  let fixture: ComponentFixture<FooterIntranetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterIntranetComponent]
    });
    fixture = TestBed.createComponent(FooterIntranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
