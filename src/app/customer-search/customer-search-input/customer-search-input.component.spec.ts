import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchInputComponent } from './customer-search-input.component';

describe('CustomerSearchInputComponent', () => {
  let component: CustomerSearchInputComponent;
  let fixture: ComponentFixture<CustomerSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
