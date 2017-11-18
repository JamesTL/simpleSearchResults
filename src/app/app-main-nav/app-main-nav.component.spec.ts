import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainNavComponent } from './app-main-nav.component';

describe('AppMainNavComponent', () => {
  let component: AppMainNavComponent;
  let fixture: ComponentFixture<AppMainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
