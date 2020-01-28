import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  combineReducers
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromBanana from './banana.reducer';
import * as fromRoot from '../../reducers';

export const appStoreFeatureKey = 'appStore';

export interface AppState {
  [fromBanana.bananaFeatureKey]: fromBanana.BananaState;
}

export interface State extends fromRoot.State {
  [appStoreFeatureKey]: AppState;
}

export function reducers(state: AppState | undefined, action: Action){
  return combineReducers({
    [fromBanana.bananaFeatureKey]: fromBanana.reducer,
  })(state, action);
};

export const selectAppState = createFeatureSelector<State, AppState>(
  appStoreFeatureKey
);

export const selectBananaState = createSelector(
  selectAppState,
  (state: AppState) => state.banana
)
export const selectBananaList = createSelector(
  selectBananaState,
  fromBanana.getBananas
)

export const selectBananaListLoading = createSelector(
  selectBananaState,
  fromBanana.getLoading
)


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
