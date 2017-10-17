type WeatherForecast = {
  coord: Coordinates,
  weather: Weather[],
  base: string,
  main: WeatherMain,
  visibility: number,
  wind: Wind,
  clouds: Clouds,
  dt: number,
  sys: SystemInfo,
  id: number,
  name: string,
  cod: number
}

type Coordinates = {
  'lon': number,
  'lat': number
}

type Weather = {
  id: number,
  main: string,
  description: string,
  icon: string
}

type WeatherMain = {
  temp: number,
  pressure: number,
  humidity: number,
  temp_min: number,
  temp_max: number
}

type Wind = {
  speed: number,
  deg: number
}

type Clouds = {
  all: number
}

type SystemInfo = {
  type: number,
  id: number,
  message: number,
  country: string,
  sunrise: number,
  sunset: number
}
