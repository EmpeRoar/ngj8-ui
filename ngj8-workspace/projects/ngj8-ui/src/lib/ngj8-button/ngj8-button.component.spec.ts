import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngj8ButtonComponent } from './ngj8-button.component';

describe('Ngj8ButtonComponent', () => {
  let component: Ngj8ButtonComponent;
  let fixture: ComponentFixture<Ngj8ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngj8ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngj8ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
