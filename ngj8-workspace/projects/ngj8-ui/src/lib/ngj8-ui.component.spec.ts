import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngj8UiComponent } from './ngj8-ui.component';

describe('Ngj8UiComponent', () => {
  let component: Ngj8UiComponent;
  let fixture: ComponentFixture<Ngj8UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngj8UiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngj8UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
