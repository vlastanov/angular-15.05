import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HighlightDirective } from "./highlight.directive";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HighlightDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
