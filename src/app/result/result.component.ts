import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input()
  public forecast$: Observable<WeatherForecast>;

  constructor() { }

  ngOnInit() {
  }

}
