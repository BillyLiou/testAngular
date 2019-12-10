import { Component, OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.scss']
})
export class FourthPageComponent implements OnInit, OnChanges {
  moneyFourth;

  constructor() { }

  ngOnInit() {
    this.moneyFourth = 500;
    console.log('初始化fourth page 裡面的money:' + this.moneyFourth);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  increase() {
    this.moneyFourth += 100;
  }

  decrease() {
    this.moneyFourth -= 100;
  }



}
