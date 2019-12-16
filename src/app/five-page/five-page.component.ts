import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { Subscription, interval } from 'rxjs';

interface temObject {
  $implicit: any;
  timer: number;
}

@Component({
  selector: 'app-five-page',
  templateUrl: './five-page.component.html',
  styleUrls: ['./five-page.component.scss']
})
export class FivePageComponent implements OnInit {
  @ContentChild(TemplateRef, { read: TemplateRef }) template: TemplateRef<temObject>;
  timer = 0;
  intervalSub: Subscription;

  constructor() { }

  ngOnInit() {
    this.timer = 10;
    // this.intervalSub = interval(1000).subscribe(() => {
    //   this.timer++;
    // });
  }

  get context(): temObject {
    console.log(this);
    const { timer } = this;
    return {
      $implicit: this.template,
      timer
    };
  }

}
