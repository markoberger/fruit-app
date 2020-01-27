
import {ActionReducerMap} from '@ngrx/store';

import * as actions from '../actions'; 
import * as bananaReducers from './banana.reducer';
import * as appleReducers from './apple.reducer';

export type Action = actions.BananaAction; 

export interface EntityState {
    bananas: bananaReducers.State;
    apples: appleReducers.State;
}

export const reducers: ActionReducerMap<EntityState> = {
    bananas: bananaReducers.reducer,
    apples: appleReducers.reducer,
}