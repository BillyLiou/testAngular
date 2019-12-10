import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { MoneyPageComponent } from './fourth-page/money-page/money-page.component';
import { AnimalPageComponent } from './fourth-page/animal-page/animal-page.component';
import { HeritedPageComponent } from './herited-page/herited-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    MoneyPageComponent,
    AnimalPageComponent,
    HeritedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:[ NO_ERRORS_SCHEMA ] // 增加這行
})
export class AppModule { }
