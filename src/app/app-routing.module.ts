import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Play1Component } from './play1/play1.component';

const routes: Routes = [
   { path: 'play1', component: Play1Component },
  //  { path: 'test5', component: Test5Component },
  // { path: 'tablica', component: TablicaComponent, outlet: 'sidebar' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }