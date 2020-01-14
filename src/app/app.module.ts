import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { MoneyPageComponent } from './fourth-page/money-page/money-page.component';
import { AnimalPageComponent } from './fourth-page/animal-page/animal-page.component';
import { HeritedPageComponent } from './herited-page/herited-page.component';
import { FivePageComponent } from './five-page/five-page.component';
import { SixPageComponent } from './six-page/six-page.component';
import { SevenPageComponent } from './seven-page/seven-page.component';
import { EightPageComponent } from './eight-page/eight-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    MoneyPageComponent,
    AnimalPageComponent,
    HeritedPageComponent,
    FivePageComponent,
    SixPageComponent,
    SevenPageComponent,
    EightPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:[ NO_ERRORS_SCHEMA ] // 增加這行
})
export class AppModule { }
