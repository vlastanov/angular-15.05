import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {TempComponent} from './temp/temp.component';
import {AlignmentComponent} from './alignment/alignment.component';

const routes: Routes = [
  { path: 'temp', component: TempComponent },
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