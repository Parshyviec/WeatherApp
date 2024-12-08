import { Component, NgModule, OnInit } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import WeatherData from '../../Types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, ReactiveFormsModule]
})
export class AppComponent implements OnInit{
  temperature: number | null = null;
  records: WeatherData[] = [];
  city = new FormControl('');
  showedRecord: WeatherData | null = null;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
        this.getRecords()
    }

  searchCity() {
    this.weatherService.getWeatherOutside(this.city.value !== null ? this.city.value : "").subscribe(
      (data) => {
        this.temperature = data.main.temp;
        const newRecord =
        {
          id: 0,
          city: this.city.value,
          temperature: this.temperature,
          timestamp: new Date()
        } as WeatherData
        this.showedRecord = newRecord;
        this.weatherService.addNewRecord(newRecord).subscribe(data => {
          this.getRecords();
        })
      },
      (error) => {
        console.error('Error fetching weather', error);
      }
    );
  }

  getRecords() {
    this.weatherService.getAllRecords().subscribe((data) => {
      debugger;
      this.records = data;
    });
  }

  deleteRecord(city: number) {
    this.weatherService.deleteRecord(city).subscribe( {
      next: () => this.getRecords(),
      error: () => this.getRecords(),
      complete: () => this.getRecords(),
    })
  }
}
