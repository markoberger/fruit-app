import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BananaComponent } from './banana/banana.component';


const routes: Routes = [
  {path: '', component: BananaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BananaRoutingModule { }
