import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainHeaderComponent } from './app-main-header.component';

describe('AppMainHeaderComponent', () => {
  let component: AppMainHeaderComponent;
  let fixture: ComponentFixture<AppMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
