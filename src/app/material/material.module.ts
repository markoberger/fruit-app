import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    DragDropModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    DragDropModule,
    MatIconModule
  ]
})
export class MaterialModule { }
