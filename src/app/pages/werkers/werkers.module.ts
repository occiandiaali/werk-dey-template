import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WerkersPageRoutingModule } from './werkers-routing.module';

import { WerkersPage } from './werkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WerkersPageRoutingModule
  ],
  declarations: [WerkersPage]
})
export class WerkersPageModule {}
