import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable({
  providedIn: 'root'
})
export class CatService extends AnimalService {

  constructor() {
    super();
    this.name = 'cat';
    this.color = 'green';
  }
}
