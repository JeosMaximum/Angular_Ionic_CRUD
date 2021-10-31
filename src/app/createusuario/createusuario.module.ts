import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateusuarioPageRoutingModule } from './createusuario-routing.module';

import { CreateusuarioPage } from './createusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateusuarioPageRoutingModule
  ],
  declarations: [CreateusuarioPage]
})
export class CreateusuarioPageModule {}
