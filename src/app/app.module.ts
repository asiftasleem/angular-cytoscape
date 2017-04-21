import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GraphComponent } from './graph/graph.component';
import { AppComponent } from './app.component';
import {NgCyto} from './ng-cyto/ng-cyto.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgCyto,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
