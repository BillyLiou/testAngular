import { Injectable } from '@angular/core';

enum AnimalEnum {
  dog = '狗',
  cat = '貓'
}

class AnimalClass {
  static tiger = '老虎';
  mouse = '老鼠';
  cow = '牛';
}

@Injectable({
  providedIn: 'root'
})



export class DemoServiceService {
  ee: AnimalEnum;

  constructor() { }

  demoConsole() {
    console.log('透過Service 打開open看');
    const abc: keyof typeof AnimalEnum = AnimalEnum[AnimalEnum.cat];
    // abc = 'string';
  }

  getAminal(animal: keyof typeof AnimalEnum) {
    console.log('獲取動物 : ' + AnimalEnum[animal]);
    const abc: keyof typeof AnimalEnum = animal;
    console.log(abc);
  }

  testKeyof(text: keyof AnimalClass) {
    const case1: AnimalClass = new AnimalClass();
    console.log(case1[text]);

  }

  testTypeof(text: typeof AnimalClass) {
    const case1: AnimalClass = new AnimalClass();
    // console.log(case1[text]);
  }


}
