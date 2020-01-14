import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightPageComponent } from './eight-page.component';

describe('EightPageComponent', () => {
  let component: EightPageComponent;
  let fixture: ComponentFixture<EightPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
