import { Component, OnInit, Output, Input } from '@angular/core';
import { Readonly, log, Student, logger } from './decorator-method';



@Component({
  selector: 'app-seven-page',
  templateUrl: './seven-page.component.html',
  styleUrls: ['./seven-page.component.scss']
})


export class SevenPageComponent implements OnInit {

  @Readonly('app-seven-page') title: string;

  constructor() { }

  ngOnInit() {
  }

}
