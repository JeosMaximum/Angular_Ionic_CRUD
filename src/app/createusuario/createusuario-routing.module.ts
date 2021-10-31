import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateusuarioPage } from './createusuario.page';

const routes: Routes = [
  {
    path: '',
    component: CreateusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateusuarioPageRoutingModule {}
