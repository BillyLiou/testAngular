import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  name;
  color;

  constructor() { }

  getName(): string {
    return this.name;
  }

  getColor(): string {
    return this.color;
  }

}
