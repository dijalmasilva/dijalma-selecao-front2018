import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideLeftComponent } from './menu-side-left.component';

describe('MenuSideLeftComponent', () => {
  let component: MenuSideLeftComponent;
  let fixture: ComponentFixture<MenuSideLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSideLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSideLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
