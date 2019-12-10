import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritedPageComponent } from './herited-page.component';

describe('HeritedPageComponent', () => {
  let component: HeritedPageComponent;
  let fixture: ComponentFixture<HeritedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
