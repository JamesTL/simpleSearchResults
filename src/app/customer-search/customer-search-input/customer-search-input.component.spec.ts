import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser';

import { CustomerSearchInputComponent } from './customer-search-input.component';

describe('CustomerSearchInputComponent', () => {
  let component: CustomerSearchInputComponent;
  let fixture: ComponentFixture<CustomerSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSearchInputComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CustomerSearchInputComponent ', () => {
    expect(component).toBeTruthy();
  });
});

