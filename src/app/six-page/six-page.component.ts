import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../service/demo-service.service';

@Component({
  selector: 'app-six-page',
  templateUrl: './six-page.component.html',
  styleUrls: ['./six-page.component.scss']
})
export class SixPageComponent implements OnInit {

  constructor(private demo: DemoServiceService) { }

  ngOnInit() {
  }

  getAnimal(animal) {
    this.demo.getAminal(animal);
  }

  tryKeyof() {
    this.demo.testKeyof('cow');
  }

  tryTypeof() {
    // this.demo.testTypeof('cow')

  }

}
