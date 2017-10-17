import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {MaterialModule} from "./material/material.module";
import { SearchHolderComponent } from './search-holder/search-holder.component';
import { ResultComponent } from './result/result.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchHolderComponent,
    ResultComponent,
    ForecastCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
