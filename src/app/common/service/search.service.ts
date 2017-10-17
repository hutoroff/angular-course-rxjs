import {Inject, Injectable} from '@angular/core';
import {CURRENT_WEATHER_URL_TOKENIZED_TOKEN} from "../../../conf/secured/openWeaterMap";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {

  private _query$$: Subject<string> = new Subject();
  public _result$: Observable<WeatherForecast>;

  constructor(
    @Inject(CURRENT_WEATHER_URL_TOKENIZED_TOKEN) private _tokenizedUrl: string,
    private _http: HttpClient
  ) {
    this._result$ = this._query$$.asObservable().debounceTime(1300)   //API limit is 50 queries per minute, debounce time of 1300 allows not to be banned
      .switchMap((query: string) => this._requestData(query));
  }

  private _requestData(query: string): Observable<WeatherForecast> {
    let url = this._tokenizedUrl + '&units=metric&q=' + query;
    return this._http.get(url);
  }

  public find(query: string) {
    this._query$$.next(query);
  }

}
