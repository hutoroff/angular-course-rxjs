import {Component, OnInit} from '@angular/core';
import {SearchService} from "../common/service/search.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public forecast: WeatherForecast;
  public iconsetPath: string = environment.WEATHER_ICONSET_DIR;

  constructor(
    private _searchService: SearchService
  ) {}

  ngOnInit() {
    this._searchService._result$.subscribe(
      (resp: WeatherForecast) => {
        this.forecast = resp;
      });
  }

}
