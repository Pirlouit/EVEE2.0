import { Component, OnInit, Output } from '@angular/core';
import { OpenWeatherService } from 'src/app/services/open-weather.service';
import { Observable } from 'rxjs';
import { WeatherDTO } from 'src/app/models/weatherDTO.model';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Output() weather: WeatherDTO;
  @Output() forecast: WeatherDTO[];

  constructor(private openWeatherService: OpenWeatherService) {
    this.weather = new WeatherDTO();
    this.forecast = [];
   }

  ngOnInit() {
    this.openWeatherService.getTodayWeather()
      .subscribe((data:any) => {
        console.log(data);
        this.weather.city = data.name;
        this.weather.day = moment().format("dddd");        
        this.weather.description = data.weather[0].description;
        this.weather.humidity = data.main.humidity;
        this.weather.iconId = data.weather[0].id;
        this.weather.maxTemp = Math.round(data.main.temp_max);
        this.weather.minTemp = Math.round(data.main.temp_min);
        this.weather.sunrise = moment.unix(data.sys.sunrise).format("HH:mm");
        this.weather.sunset = moment.unix(data.sys.sunset).format("HH:mm");
        this.weather.temp = Math.round(data.main.temp);
        this.weather.windDirection = this.degreesToCompass(data.wind.deg);
        this.weather.windSpeed = Math.round(data.wind.speed * 3.6);
        //console.log(this.weather);
    });
    
    this.openWeatherService.getForecast()
      .subscribe((data:any)=>{
        console.log(data);
        this.forecast = this.openWeatherService.forecastResponseToWeatherDTO(data);
        console.log(this.forecast);
        return;
        for(var i = 0; i < data.list.length; i+=8){
          var currentWeather = data.list[i];
          var weatherTmp = new WeatherDTO();
          weatherTmp.day = moment.unix(currentWeather.dt).format("dddd");
          weatherTmp.iconId = currentWeather.weather[0].id;
          weatherTmp.maxTemp = Math.round(currentWeather.main.temp_max);
          weatherTmp.minTemp = Math.round(currentWeather.main.temp_min);
          this.forecast.push(weatherTmp);
          //console.log(currentWeather);
          //console.log(weatherTmp);
        }
      });
  }

  degreesToCompass(degree:number){
    var index = Math.round((degree/22.5)+.5);
    var compassArray=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return compassArray[index];
  }

}
