import { createAction, props } from '@ngrx/store';
import { Banana } from 'src/app/core/core/models/banana';
import { Artikl } from 'src/app/core/core/models/artikl';

export const loadBananas = createAction(
  '[Banana] Load Bananas'
);

export const loadBananasSuccess = createAction(
  '[Banana] Load Bananas Success',
  props<{ bananas: (Banana & Artikl)[] }>()
);

export const loadBananasFailure = createAction(
  '[Banana] Load Bananas Failure',
  props<{ error: any }>()
);
