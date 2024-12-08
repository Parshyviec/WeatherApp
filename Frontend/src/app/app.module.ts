import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './Components/App/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppComponent, FormsModule],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [],
})
export class AppModule {}
