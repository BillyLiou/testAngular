import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }

  demoConsole() {
    console.log('透過Service 打開open看');
  }
}
