import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmateusPageRoutingModule } from './amateus-routing.module';

import { AmateusPage } from './amateus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmateusPageRoutingModule
  ],
  declarations: [AmateusPage]
})
export class AmateusPageModule {}
