import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspaceComponent } from './userspace.component';

describe('UserspaceComponent', () => {
  let component: UserspaceComponent;
  let fixture: ComponentFixture<UserspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
