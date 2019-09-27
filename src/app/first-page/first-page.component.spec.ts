import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponent } from './first-page.component';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should selector h1 have a output "HI~~~" ' , () => {
    const fixture = TestBed.createComponent(FirstPageComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('HI~~~');
  });

  it('必須得調用這個function ', () => {
    const fixture = TestBed.createComponent(FirstPageComponent);
    // fixture.detectChanges();
    spyOn(component, 'changeString');
    component.changeString();
    expect(component.changeString).toHaveBeenCalled();
  });
});
