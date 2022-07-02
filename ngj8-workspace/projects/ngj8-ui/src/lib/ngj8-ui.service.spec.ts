import { TestBed } from '@angular/core/testing';

import { Ngj8UiService } from './ngj8-ui.service';

describe('Ngj8UiService', () => {
  let service: Ngj8UiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ngj8UiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
