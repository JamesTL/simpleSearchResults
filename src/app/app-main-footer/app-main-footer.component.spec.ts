import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainFooterComponent } from './app-main-footer.component';

describe('AppMainFooterComponent', () => {
  let component: AppMainFooterComponent;
  let fixture: ComponentFixture<AppMainFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
