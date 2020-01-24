import { TestBed } from '@angular/core/testing';

import { AppleTestService } from './apple-test.service';

describe('AppleTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppleTestService = TestBed.get(AppleTestService);
    expect(service).toBeTruthy();
  });
});
