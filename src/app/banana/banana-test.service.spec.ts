import { TestBed } from '@angular/core/testing';

import { BananaTestService } from './banana-test.service';

describe('BananaTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BananaTestService = TestBed.get(BananaTestService);
    expect(service).toBeTruthy();
  });
});
