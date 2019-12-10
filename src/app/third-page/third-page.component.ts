import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { CatService } from '../service/cat.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
  providers: [{ provide: AnimalService, useClass: CatService }]
})
export class ThirdPageComponent implements OnInit {
  name;
  color;

  constructor(private cat: AnimalService) { }

  ngOnInit() {
    this.name =  this.cat.getName();
  }

}
