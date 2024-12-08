import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import WeatherData from '../Types/types';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private backendUrl = 'http://localhost:5092/api/weather';
  private ApiKey = "e0ff879dce44d30341f6d03255ab1cf8";
  private BaseUrl = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${this.backendUrl}/${city}`);
  }

    getWeatherOutside(city: string): Observable<any> {
    return this.http.get(`${this.BaseUrl}?q=${city}&appid=${this.ApiKey}&units=metric`);
  }

  addNewRecord(record: WeatherData) {
    debugger;
    return this.http.post(this.backendUrl, record);
  }

  getAllRecords(): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(this.backendUrl);
  }

  deleteRecord(city: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/${city}`);
  }
}
