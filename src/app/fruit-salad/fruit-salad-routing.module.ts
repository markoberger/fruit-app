import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitSaladComponent } from './fruit-salad/fruit-salad.component';
import { SaladDashboardComponent } from './salad-dashboard/salad-dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'salad-dashboard/'},
  {path: 'salad-dashboard/', component: SaladDashboardComponent},
  {path: 'fruit-salad/', component: FruitSaladComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitSaladRoutingModule { }
