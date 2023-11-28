import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIntranetComponent } from './navbar-intranet.component';

describe('NavbarIntranetComponent', () => {
  let component: NavbarIntranetComponent;
  let fixture: ComponentFixture<NavbarIntranetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarIntranetComponent]
    });
    fixture = TestBed.createComponent(NavbarIntranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
