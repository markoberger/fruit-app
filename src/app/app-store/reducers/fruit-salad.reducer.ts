import { Action, createReducer, on } from '@ngrx/store';
import { FruitSalad } from 'src/app/core/core/models/fruit-salad';
import { FruitSaladActions } from '../actions';


export const fruitSaladFeatureKey = 'fruitSalad';

export interface FruitSaladState {
  fruitSalads: FruitSalad[];
  loading: boolean;
  error: boolean;
}

export const initialState: FruitSaladState = {} as FruitSaladState;

const fruitSaladReducer = createReducer(
  initialState,
  on(FruitSaladActions.addFruitSalad, (state, {fruitSalad}) => ({
    ...state,
    fruitSalads: [ ...state.fruitSalads, fruitSalad]
  })),
  on(FruitSaladActions.loadFruitSalads, state => ({
    ...state,
    loading: true
  })),
  on(FruitSaladActions.loadFruitSaladsSuccess, (state, {fruitSalads}) => ({
    ...state,
    loading: false,
    fruitSalads
  }))

);

export const getFruitSalads = (state: FruitSaladState) => state.fruitSalads;
export const getLoading = (state: FruitSaladState) => state.loading;
export const getError = (state: FruitSaladState) => state.error;

export function reducer(state: FruitSaladState | undefined, action: Action) {
  return fruitSaladReducer(state, action);
}
