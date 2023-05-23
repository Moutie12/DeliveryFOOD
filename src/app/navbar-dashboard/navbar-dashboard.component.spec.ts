import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDASHBOARDComponent } from './navbar-dashboard.component';

describe('NavbarDASHBOARDComponent', () => {
  let component: NavbarDASHBOARDComponent;
  let fixture: ComponentFixture<NavbarDASHBOARDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDASHBOARDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDASHBOARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
