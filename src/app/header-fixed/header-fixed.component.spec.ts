import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFixedComponent } from './header-fixed.component';

describe('HeaderFixedComponent', () => {
  let component: HeaderFixedComponent;
  let fixture: ComponentFixture<HeaderFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
