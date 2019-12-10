import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyPageComponent } from './money-page.component';

describe('MoneyPageComponent', () => {
  let component: MoneyPageComponent;
  let fixture: ComponentFixture<MoneyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
