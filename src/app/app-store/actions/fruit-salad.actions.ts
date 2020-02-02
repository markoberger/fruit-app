import { createAction, props } from '@ngrx/store';
import { FruitSalad } from 'src/app/core/core/models/fruit-salad';

export const loadFruitSalads = createAction(
  '[FruitSalad] Load FruitSalads'
);

export const loadFruitSaladsSuccess = createAction(
  '[FruitSalad] Load FruitSalads Success',
  props<{ fruitSalads: FruitSalad[] }>()
);

export const loadFruitSaladsFailure = createAction(
  '[FruitSalad] Load FruitSalads Failure',
  props<{ error: any }>()
);

export const addFruitSalad = createAction(
  '[FruitSalad] Add FruitSalads',
  props<{ fruitSalad: FruitSalad }>()
)

//TODO: need to check this 
export const addFruitSaladSuccess = createAction(
  '[FruitSalad] Add FruitSalads Success',
  props<{ fruitSalads: FruitSalad[] }>()
)

export const addFruitSaladError = createAction(
  '[FruitSalad] Add FruitSalads Failure',
  props<{ error: any }>()
)
