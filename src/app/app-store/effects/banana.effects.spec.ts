import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BananaEffects } from './banana.effects';

describe('BananaEffects', () => {
  let actions$: Observable<any>;
  let effects: BananaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BananaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<BananaEffects>(BananaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
