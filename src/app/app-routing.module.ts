import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'werkers', pathMatch: 'full' },
  {
    path: 'werkers',
    loadChildren: () => import('./pages/werkers/werkers.module').then( m => m.WerkersPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/werker-detail/werker-detail.module').then( m => m.WerkerDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
