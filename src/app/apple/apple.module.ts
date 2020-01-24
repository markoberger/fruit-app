import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppleRoutingModule } from './apple-routing.module';
import { AppleComponent } from './apple/apple.component';


@NgModule({
  declarations: [AppleComponent],
  imports: [
    CommonModule,
    AppleRoutingModule
  ]
})
export class AppleModule { }
