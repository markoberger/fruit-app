import { Action, createReducer, on } from '@ngrx/store';
import { Apple } from 'src/app/core/core/models/apple';
import { Artikl } from 'src/app/core/core/models/artikl';
import { AppleActions } from '../actions';



export const appleFeatureKey = 'apple';

export interface AppleState {
  apples: (Apple & Artikl)[];
  loading: boolean;
  error: boolean;
}

export const initialState: AppleState = {
  apples: [],
  loading: false,
  error: false
};

const appleReducer = createReducer(
  initialState,
  on(AppleActions.loadApples, state => ({
    ...state,
    loading: true
  })),
  on(AppleActions.loadApplesSuccess, (state, {apples}) => ({
    ...state,
    loading: false,
    apples
  }))

);

export const getLoading = (state: AppleState) => state.loading;
export const getApples = (state: AppleState) => state.apples;
export const getError = (state: AppleState) => state.error;

export function reducer(state: AppleState | undefined, action: Action) {
  return appleReducer(state, action);
}
