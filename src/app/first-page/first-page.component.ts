import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../service/demo-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  Testing;

  constructor(private demoService: DemoServiceService) { }

  ngOnInit() {
    console.log('進到 First Page Component');
    this.changeString();
  }

  testConcole() {
    console.log('點擊一次');
  }

  demoConsole() {
    this.demoService.demoConsole();
  }

  changeString() {
    this.Testing = "HI~~~";
  }
}
