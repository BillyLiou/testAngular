import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, ElementRef, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-money-page',
  templateUrl: './money-page.component.html',
  styleUrls: ['./money-page.component.scss']
})
export class MoneyPageComponent implements OnInit, OnChanges {
  @Input() money;
  @Output() refund = new EventEmitter();
  @ViewChild('moneyColor') moneyColor: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  // ngOnchanges裡面的changes的實作SimpleChanges , 監聽當前@Input事件
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['money'].currentValue % 1000 === 0) {
      this.moneyColor.nativeElement.style.color = 'green';
    } else {
      this.moneyColor.nativeElement.style.color = 'black';
    }
  }

}
