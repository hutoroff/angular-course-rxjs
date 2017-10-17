/*
Instruction:
1. Move me: /src/conf/secured/openWeatherMap.ts
2. Put your token to CURRENT_WEATHER_URL_TOKENIZED constant
3. Have fun
 */
import {InjectionToken} from "@angular/core";
import {urls} from "../environments/environment";

export const CURRENT_WEATHER_URL_TOKENIZED: string = urls.CURRENT_WEATHER + '?appid=' + '%PLACE_YOUR_TOKEN_HERE%';
export const CURRENT_WEATHER_URL_TOKENIZED_TOKEN: InjectionToken<string> = new InjectionToken(CURRENT_WEATHER_URL_TOKENIZED);
