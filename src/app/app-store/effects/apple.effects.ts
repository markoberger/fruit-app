import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppleTestService } from 'src/app/apple/apple-test.service';
import { AppleActions } from '../actions';
import { mergeMap, map } from 'rxjs/operators';
import { Artikl } from 'src/app/core/core/models/artikl';
import { Apple } from 'src/app/core/core/models/apple';



@Injectable()
export class AppleEffects {

  loadApples$ = createEffect(() => this.actions$.pipe(
    ofType(AppleActions.loadApples.type),
    /** An EMPTY observable only emits completion. Replace with your own observable stream */
    mergeMap(() => this.appleService.getApples().pipe(
      map((apples: (Apple & Artikl)[]) => AppleActions.loadApplesSuccess({apples}))
    ))
    )
    );

  constructor(
    private actions$: Actions,
    private appleService: AppleTestService) {}

}
