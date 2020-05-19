import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { Play1Component } from "./play1/play1.component";
import { Play2Component } from "./play2/play2.component";

const routes: Routes = [
  { path: "play2", component: Play2Component },
  {
    path: "play1/:id",
    component: Play1Component,
    // children: [
    //   {
    //     path: "child-a",
    //     component: ChildAComponent
    //   },
    //   {
    //     path: "child-b",
    //     component: ChildBComponent
    //   }
    // ]
  },
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
