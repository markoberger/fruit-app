import { Action, createReducer, on } from '@ngrx/store';


export const appleFeatureKey = 'apple';

export interface State {

}

export const initialState: State = {

};

const appleReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return appleReducer(state, action);
}
