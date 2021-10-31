import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmateusPage } from './amateus.page';

const routes: Routes = [
  {
    path: '',
    component: AmateusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmateusPageRoutingModule {}
