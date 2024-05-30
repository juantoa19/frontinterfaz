import { TestBed } from '@angular/core/testing';

import { CarrusellService } from './carrusell.service';

describe('CarrusellService', () => {
  let service: CarrusellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrusellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
