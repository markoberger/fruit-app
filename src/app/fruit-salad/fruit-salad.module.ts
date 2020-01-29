import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitSaladRoutingModule } from './fruit-salad-routing.module';
import { FruitSaladComponent } from './fruit-salad/fruit-salad.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [FruitSaladComponent],
  imports: [
    CommonModule,
    FruitSaladRoutingModule,
    MaterialModule
  ]
})
export class FruitSaladModule { }
