import { createAction, props } from '@ngrx/store';

export const loadApples = createAction(
  '[Apple] Load Apples'
);

export const loadApplesSuccess = createAction(
  '[Apple] Load Apples Success',
  props<{ data: any }>()
);

export const loadApplesFailure = createAction(
  '[Apple] Load Apples Failure',
  props<{ error: any }>()
);
