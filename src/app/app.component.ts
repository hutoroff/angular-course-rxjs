import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {SearchService} from "./common/service/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public logoPath: string = "assets/img/logo.svg";
  public searchPlaceholder: string = "Enter city name";

  public forecast$: Observable<WeatherForecast>;

  constructor(
    private _searchService: SearchService
  ) {
    this.forecast$ = this._searchService._result$;
  }
}
