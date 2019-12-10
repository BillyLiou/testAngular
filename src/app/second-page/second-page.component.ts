import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
  providers: [{ provide: AnimalService, useClass: DogService }]
})
export class SecondPageComponent implements OnInit {
  name;
  color;

  constructor(private dog: AnimalService) { }

  ngOnInit() {
    this.name = this.dog.getName();
  }

  getDog() {

  }

}
