import { Component, OnInit } from '@angular/core';

import { CommonMethodService } from '../service/common-method.service';

@Component({
  selector: 'app-eight-page',
  templateUrl: './eight-page.component.html',
  styleUrls: ['./eight-page.component.scss']
})
export class EightPageComponent implements OnInit {

  constructor(private commonMethod: CommonMethodService) { }

  ngOnInit() {
    this.commonMethod.getConfig().subscribe(res => {
      console.log(res);
    });
  }

}
