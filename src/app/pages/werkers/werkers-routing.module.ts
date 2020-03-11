import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WerkersPage } from './werkers.page';

const routes: Routes = [
  {
    path: '',
    component: WerkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WerkersPageRoutingModule {}
