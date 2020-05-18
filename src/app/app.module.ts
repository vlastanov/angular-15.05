import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HighlightDirective } from "./highlight.directive";
import { Test5Component } from "./test5/test5.component";
import { TempComponent } from "./temp/temp.component";
import { AppRoutingModule } from "./app-routing.module";
import { AlignmentComponent } from './alignment/alignment.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HighlightDirective,
    Test5Component,
    TempComponent,
    AlignmentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
