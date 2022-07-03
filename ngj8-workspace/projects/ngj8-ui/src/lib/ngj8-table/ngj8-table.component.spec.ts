import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngj8TableComponent } from './ngj8-table.component';

describe('Ngj8TableComponent', () => {
  let component: Ngj8TableComponent;
  let fixture: ComponentFixture<Ngj8TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngj8TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngj8TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
