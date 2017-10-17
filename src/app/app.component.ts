import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public logoPath: string = "assets/img/logo.svg";
  public searchPlaceholder: string = "Enter city name";

  public forecast: WeatherForecast;
}
