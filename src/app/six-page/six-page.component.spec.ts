import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPageComponent } from './six-page.component';

describe('SixPageComponent', () => {
  let component: SixPageComponent;
  let fixture: ComponentFixture<SixPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
