import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppleComponent } from './apple/apple.component';


const routes: Routes = [
  {path: '', component: AppleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppleRoutingModule { }
