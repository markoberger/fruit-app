import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAppStore from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { BananaEffects } from './effects/banana.effects';
import { AppleEffects } from './effects/apple.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAppStore.appStoreFeatureKey, fromAppStore.reducers),
    EffectsModule.forFeature([BananaEffects, AppleEffects]),

  ]
})
export class AppStoreModule { }
