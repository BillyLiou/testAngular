import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable({
  providedIn: 'root'
})
export class DogService extends AnimalService {

  constructor() {
    super();
    this.name = 'Dog';
    this.color = 'black';
  }




}
