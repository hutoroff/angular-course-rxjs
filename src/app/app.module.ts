import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from "./material/material.module";
import { SearchHolderComponent } from './search-holder/search-holder.component';
import { ResultComponent } from './result/result.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';
import { SearchService } from "./common/service/search.service";
import {
  CURRENT_WEATHER_URL_TOKENIZED, CURRENT_WEATHER_URL_TOKENIZED_TOKEN
} from "../conf/secured/openWeaterMap";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./common/service/interceptor.service";

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
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    {
      provide: CURRENT_WEATHER_URL_TOKENIZED_TOKEN,
      useValue: CURRENT_WEATHER_URL_TOKENIZED
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
