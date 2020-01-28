import { createAction, props } from '@ngrx/store';

export const loadBananas = createAction(
  '[Banana] Load Bananas'
);

export const loadBananasSuccess = createAction(
  '[Banana] Load Bananas Success',
  props<{ data: any }>()
);

export const loadBananasFailure = createAction(
  '[Banana] Load Bananas Failure',
  props<{ error: any }>()
);
