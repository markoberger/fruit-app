import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BananaRoutingModule } from './banana-routing.module';
import { BananaComponent } from './banana/banana.component';



@NgModule({
  declarations: [BananaComponent],
  imports: [
    CommonModule,
    BananaRoutingModule,
  ]
})
export class BananaModule { }
