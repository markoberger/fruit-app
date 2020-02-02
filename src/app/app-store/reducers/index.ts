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
import * as fromApple from './apple.reducer';
import * as fromFruitSalad from './fruit-salad.reducer';
import * as fromRoot from '../../reducers';

export const appStoreFeatureKey = 'appStore';

export interface AppState {
  [fromBanana.bananaFeatureKey]: fromBanana.BananaState;
  [fromApple.appleFeatureKey]: fromApple.AppleState;
  [fromFruitSalad.fruitSaladFeatureKey]: fromFruitSalad.FruitSaladState;
}

export interface State extends fromRoot.State {
  [appStoreFeatureKey]: AppState;
}


export function reducers(state: AppState | undefined, action: Action) {
  return combineReducers({
    [fromBanana.bananaFeatureKey]: fromBanana.reducer,
    [fromApple.appleFeatureKey]: fromApple.reducer,
    [fromFruitSalad.fruitSaladFeatureKey]: fromFruitSalad.reducer
  })(state, action);
}


// ------- SELECTORS --------
export const selectAppState = createFeatureSelector<State, AppState>(
  appStoreFeatureKey
  );

  // ------- SELECTORS BANANA--------
export const selectBananaState = createSelector(
  selectAppState,
  (state: AppState) => state.banana
  );

export const selectBananaList = createSelector(
  selectBananaState,
  fromBanana.getBananas
  );
export const selectBananaListLoading = createSelector(
  selectBananaState,
  fromBanana.getLoading
  );

// ------- SELECTORS APPLE--------
export const selectAppleState = createSelector(
  selectAppState,
  (state: AppState) => state.apple
  );

export const selectAppleList = createSelector(
    selectAppleState,
    fromApple.getApples
    );

export const selectAppleListLoading = createSelector(
      selectAppleState,
      fromApple.getLoading
      );

// ------- SELECTORS JOIN --------

export const selectAppleBananaList = createSelector(
        selectBananaState,
        selectAppleState,
        ( bananas, apples) => [ ...bananas.bananas, ...apples.apples]

        );

// ------- SELECTORS FRUIT SALAD--------
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
