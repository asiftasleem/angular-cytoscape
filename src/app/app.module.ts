import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GraphComponent } from './graph/graph.component';
import { AppComponent } from './app.component';
import {NgCytoComponent} from './ng-cyto/ng-cyto.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCytoComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
