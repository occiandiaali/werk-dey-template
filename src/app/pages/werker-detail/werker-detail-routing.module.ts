import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WerkerDetailPage } from './werker-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WerkerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WerkerDetailPageRoutingModule {}
