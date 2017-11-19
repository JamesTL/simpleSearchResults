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

  it('should emit  a doCustomerSearch event', () => {
    //arrange
    let testEvent={event:{},searchString;'test'};
    spyOn(component.doCustomerSearch, 'emit');
    //act customerSearch($event)
    component.customerSearch(testEvent)
    //assert
    expect(component.eventEmitter.emit).toHaveBeenCalledWith(testEvent);
  });
});

