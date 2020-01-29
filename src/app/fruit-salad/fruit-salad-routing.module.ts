import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitSaladComponent } from './fruit-salad/fruit-salad.component';


const routes: Routes = [
  {path: '', component: FruitSaladComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitSaladRoutingModule { }
