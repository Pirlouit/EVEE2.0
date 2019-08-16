export class WeatherDTO{
    city: string;
    temp: number;
    iconId: number;
    description: string;
    day: string;
    sunrise: string;
    sunset: string;
    maxTemp: number;
    minTemp: number;
    humidity: number;
    windDirection: string;
    windSpeed: number;
}

export class ForecastDTO{
    day: string;
    iconId: number;
    maxTemp: number;
    minTemp: number;
}

export class WeatherModel{
    today: WeatherDTO;
    forecast: ForecastDTO[];
}