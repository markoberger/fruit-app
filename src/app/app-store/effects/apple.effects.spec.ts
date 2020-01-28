import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppleEffects } from './apple.effects';

describe('AppleEffects', () => {
  let actions$: Observable<any>;
  let effects: AppleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AppleEffects>(AppleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
