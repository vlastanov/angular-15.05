import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HighlightDirective } from "./highlight.directive";
import { AppRoutingModule } from "./app-routing.module";
import { Play1Component } from './play1/play1.component';



@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HighlightDirective,
    Play1Component,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
