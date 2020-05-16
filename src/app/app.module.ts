import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { Test5Component } from './test5/test5.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule ],
  declarations: [ AppComponent, HighlightDirective, Test5Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
