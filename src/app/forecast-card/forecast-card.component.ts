import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})
export class ForecastCardComponent implements OnInit {

  @Input()
  public forecast: WeatherForecast;

  constructor() { }

  ngOnInit() {
  }

}
