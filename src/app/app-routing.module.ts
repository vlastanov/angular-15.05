import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { Play1Component } from "./play1/play1.component";
import { Play2Component } from "./play2/play2.component";
import { Play3Component } from './play3/play3.component';
import { MyChildAComponent } from './my-child-a/my-child-a.component';

const routes: Routes = [
  { path: "play2", component: Play2Component },
  {
    path: "play1/:id",
    component: Play3Component,
    children: [
      {
        path: "childa",
        component: MyChildAComponent
      },
    ]
  },
  { path: "play1", component: Play1Component },
  { path: "", redirectTo: "/play1", pathMatch: "full" }, 
  { path: "**", component: Play1Component }
  // { path: 'tablica', component: TablicaComponent, outlet: 'sidebar' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
