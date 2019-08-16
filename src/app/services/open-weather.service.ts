import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherComponent } from '../components/weather/weather.component';
import { Observable } from 'rxjs';
import { WeatherDTO } from '../models/weatherDTO.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  lang = "fr";
  city = "Tournai";
  units = "metric";
  key = "c8115bd2749f15670ac5fef1b5e0748f";
  baseUrl = "http://api.openweathermap.org/data/2.5/";

  public TodayWeather : WeatherDTO;
  
  constructor(private http: HttpClient) { }

  private buildUrl(api:string):string{
    var url = this.baseUrl + api;
    url += "?lang=" +  this.lang;
    url += "&q=" + this.city;
    url += "&units=" + this.units
    url += "&appid=" + this.key;
    return url;
  }

  public getTodayWeather(): Observable<any> {
    return this.http.get(this.buildUrl("weather"));
  }

  public getForecast(): Observable<any>{
    return this.http.get(this.buildUrl("forecast"));
  }

  public forecastResponseToWeatherDTO(resp: any): WeatherDTO[]{
    var forecastArray = [];
    for(var i = 0; i < resp.list.length; i++){
      var currentWeather = resp.list[i];
      var weatherTmp = new WeatherDTO();
      weatherTmp.day = moment.unix(currentWeather.dt).format("dddd");
      weatherTmp.iconId = currentWeather.weather[0].id;
      weatherTmp.maxTemp = Number.MIN_SAFE_INTEGER;
      weatherTmp.minTemp = Number.MAX_SAFE_INTEGER;
      for(var weatherIndex = resp.list[i];
        i < resp.list.length  && weatherTmp.day == moment.unix(weatherIndex.dt).format("dddd") ;
        weatherIndex = resp.list[++i])
        {
        weatherTmp.maxTemp = Math.round(Math.max(weatherTmp.maxTemp, weatherIndex.main.temp_max));
        weatherTmp.minTemp = Math.round(Math.min(weatherTmp.minTemp, weatherIndex.main.temp_min));
      }
      forecastArray.push(weatherTmp);
    }
    forecastArray.shift();
    forecastArray.pop();
    return forecastArray;
  }
}
