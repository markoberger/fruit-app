import { Action, createReducer, on } from '@ngrx/store';


export const bananaFeatureKey = 'banana';

export interface State {

}

export const initialState: State = {

};

const bananaReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return bananaReducer(state, action);
}
