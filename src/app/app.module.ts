import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HighlightDirective } from "./play1/highlight.directive";
import { AppRoutingModule } from "./app-routing.module";
import { Play1Component } from './play1/play1.component';
import { Play2Component } from './play2/play2.component';
import { Play3Component } from './play3/play3.component';
import { MyChildAComponent } from './my-child-a/my-child-a.component';



@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HighlightDirective,
    Play1Component,
    Play2Component,
    Play3Component,
    MyChildAComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
