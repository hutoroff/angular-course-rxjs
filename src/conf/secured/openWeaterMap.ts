import {InjectionToken} from "@angular/core";
import {urls} from "../../environments/environment";

export const CURRENT_WEATHER_URL_TOKENIZED: string = urls.CURRENT_WEATHER + '?appid=' + '2a027c4d89901b1a3df932fef254540b';
export const CURRENT_WEATHER_URL_TOKENIZED_TOKEN: InjectionToken<string> = new InjectionToken(CURRENT_WEATHER_URL_TOKENIZED);
