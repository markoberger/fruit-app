import { Action, createReducer, on } from '@ngrx/store';
import { Banana } from 'src/app/core/core/models/banana';
import { Artikl } from 'src/app/core/core/models/artikl';
import {
  BananaActions,
} from '../actions';
import { state } from '@angular/animations';

export const bananaFeatureKey = 'banana';

export interface BananaState {
  bananas: (Banana & Artikl)[];
  loading: boolean;
  error: boolean;
}

export const initialState: BananaState = {
  bananas: [],
  loading: false,
  error: false
};

const bananaReducer = createReducer(
  initialState,
  on(BananaActions.loadBananas, state => ({
    ...state, 
    loading: true
  })),
  on(BananaActions.loadBananasSuccess, (state, {bananas}) => ({
    ...state,
    loading: false,
    bananas
  }))

);

export const getLoading = (state: BananaState) => state.loading; 
export const getBananas = (state: BananaState) => state.bananas; 
export const getError = (state: BananaState) => state.error; 

export function reducer(state: BananaState | undefined, action: Action) {
  return bananaReducer(state, action);
}
