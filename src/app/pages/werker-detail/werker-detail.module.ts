import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WerkerDetailPageRoutingModule } from './werker-detail-routing.module';

import { WerkerDetailPage } from './werker-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WerkerDetailPageRoutingModule
  ],
  declarations: [WerkerDetailPage]
})
export class WerkerDetailPageModule {}
