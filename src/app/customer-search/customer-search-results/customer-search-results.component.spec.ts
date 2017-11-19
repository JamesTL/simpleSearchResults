import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'


import { CustomerSearchResultsComponent } from './customer-search-results.component';

describe('CustomerSearchResultsComponent', () => {
    let component:CustomerSearchResultsComponent;
    let fixture:ComponentFixture<CustomerSearchResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [CustomerSearchResultsComponent],
                imports: [FormsModule]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerSearchResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should createCustomerSearchResultsComponent ', () => {
        expect(component).toBeTruthy();
    });

});
