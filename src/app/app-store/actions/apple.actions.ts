import { createAction, props } from '@ngrx/store';
import { Artikl } from 'src/app/core/core/models/artikl';
import { Apple } from 'src/app/core/core/models/apple';

export const loadApples = createAction(
  '[Apple] Load Apples'
);

export const loadApplesSuccess = createAction(
  '[Apple] Load Apples Success',
  props<{ apples: (Apple & Artikl)[] }>()
);

export const loadApplesFailure = createAction(
  '[Apple] Load Apples Failure',
  props<{ error: any }>()
);
