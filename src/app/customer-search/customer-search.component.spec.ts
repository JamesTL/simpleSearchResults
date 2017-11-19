import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchComponent } from './customer-search.component';
import { CustomerSearchService} from './../core/services/customer-search.service'

import {MockCustomerSearchService} from './../core/mock-services/mock-customer-search.service'

describe('CustomerSearchComponent', () => {
    let component:CustomerSearchComponent;
    let fixture:ComponentFixture<CustomerSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [CustomerSearchComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    {provide: CustomerSearchService, useClass: MockCustomerSearchService},

                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create CustomerSearchComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should onInit set SearchStatus  to false', ()=> {
        //arrange
        let expectedResult = false;
        //act
        fixture.detectChanges();
        //assert
        expect(component.searchInProgress).toBe(expectedResult);

    });

    it('should onInit set resultSetEmpty  to true', ()=> {
        //arrange
        let expectedResult = true;
        //act
        fixture.detectChanges();
        //assert
        expect(component.resultSetEmpty).toBe(expectedResult);

    });


    describe('it should return correct search results -  setSearchResults()', ()=> {

        it('should return all results if  ssearch string is empty string', ()=> {
            //arrange
            //expected results from the MockCustomerSearchService
            let expectedResult = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }, {
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }];

            let eventObject = {event: {}, searchString: ''}

            //act
            component.setSearchResults(eventObject);
            fixture.detectChanges();
            //assert
            expect(component.searchResults).toEqual(expectedResult);


        });

        it('should return all results if  search string is "undefined"', ()=> {
            //arrange
            //expected results from the MockCustomerSearchService
            let expectedResult = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }, {
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }];

            let eventObject = {event: {}, searchString: undefined}

            //act
            component.setSearchResults(eventObject);
            fixture.detectChanges();
            //assert
            expect(component.searchResults).toEqual(expectedResult);

        });

        it('should return filtered results results if search string is present in customer.id field', ()=> {
            //arrange
            let expectedResult = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }]

            let eventObject = {event: {}, searchString: 'C2N'}

            //act
            component.setSearchResults(eventObject);
            fixture.detectChanges();
            //assert
            expect(component.searchResults).toEqual(expectedResult);

        });

        it('should return filtered results results if search string is present in customer.name field', ()=> {
            //arrange
            //
            let expectedResult = [{
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }]

            let eventObject = {event: {}, searchString: 'FTWARE'}

            //act
            component.setSearchResults(eventObject);
            fixture.detectChanges();
            //assert
            expect(component.searchResults).toEqual(expectedResult);

        });

        it('should return correct results all results if  search string is in both customer.id or customer.name', ()=> {
            //arrange
            //expected results from the MockCustomerSearchService
            let expectedResult = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }, {
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }];

            let eventObject = {event: {}, searchString: 'sharedText'};

            //act
            component.setSearchResults(eventObject);
            fixture.detectChanges();
            //assert
            expect(component.searchResults).toEqual(expectedResult);

        });

    })


    describe('It allow search results to be filtered correctly - filterResults()', ()=> {

        it('should return array of items that contain search string value in customer.name', ()=> {
            //arrange
            var testData = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }, {
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }];

            let expectedResult = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }];
            let searchString = ('C2N');
            //act
            let result = component.filterResults(testData, searchString);
            fixture.detectChanges();

            //assert
            expect(result).toEqual(expectedResult);

        });
        it('should return array of items that contain search string value only  in customer.id', ()=> {
            //arrange
            var testData = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }, {
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }];

            let expectedResult = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }];
            let searchString = ('A0201C2N');

            //act
            let result = component.filterResults(testData, searchString);
            fixture.detectChanges();

            //assert
            expect(result).toEqual(expectedResult);


        });
        it('should return array of items that contain search string value  in both customer.id and customer.name', ()=> {
            //arrange
            var testData = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }, {
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }];

            let expectedResult = [{
                "id": "A0201C2NsharedText",
                "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
                "balance": "74.44",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001531",
                    "sortCode": "000000"
                }],
                "customerId": "C02013ZU",
                "externalReference": "GOJI-0017111"
            }, {
                "id": "A02017NU",
                "name": "1010 SOFTWARE LTD sharedText",
                "balance": "46.91",
                "currency": "GBP",
                "status": "ACTIVE",
                "identifiers": [{
                    "type": "SCAN",
                    "accountNumber": "00001232",
                    "sortCode": "000000"
                }],
                "customerId": "C0200098",
                "externalReference": "Account 1"
            }];;
            let searchString = ('sharedText');

            //act
            let result = component.filterResults(testData, searchString);
            fixture.detectChanges();
            //assert
            expect(result).toEqual(expectedResult);

        });

    })


    it('should allow searchStatus to be updated - setSearchStatus()', ()=> {
        //arrange
        let testData = true;
        let expecetedResult = true;
        //act
        component.setSearchStatus(testData);
        fixture.detectChanges();
        //assert
        expect(component.searchInProgress).toBe(expecetedResult);

    });

    it('should allow searchResults to be cleared/emptied -clearResults()', ()=> {
        //arrange
        var testData = [{
            "id": "A0201C2N",
            "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
            "balance": "74.44",
            "currency": "GBP",
            "status": "ACTIVE",
            "identifiers": [{
                "type": "SCAN",
                "accountNumber": "00001531",
                "sortCode": "000000"
            }],
            "customerId": "C02013ZU",
            "externalReference": "GOJI-0017111"
        }, {
            "id": "A02017NU",
            "name": "1010 SOFTWARE LTD",
            "balance": "46.91",
            "currency": "GBP",
            "status": "ACTIVE",
            "identifiers": [{
                "type": "SCAN",
                "accountNumber": "00001232",
                "sortCode": "000000"
            }],
            "customerId": "C0200098",
            "externalReference": "Account 1"
        }];

        let expectedResult = [];

        component.searchResults = testData;
        fixture.detectChanges();
        expect(component.searchResults).toEqual(testData);

        //act
        component.clearResults();
        fixture.detectChanges();

        //assert
        expect(component.searchResults).toEqual(expectedResult);


    });

    it('should determine if searchResult collection is empty -  isEmptyResultSet()', ()=> {
        //arrange
        var testData = [];
        let expectedResult = true

        //act
        let result = component.isEmptyResultSet(testData);
        fixture.detectChanges();

        //assert
        expect(result).toBe(expectedResult);

    })
    it('should determine if searchResult collection is not empty -  isEmptyResultSet()', ()=> {
        //arrange
        var testData = [{
            "id": "A0201C2N",
            "name": "0e2a7d1c-033c-4622-920f-5bda21825682",
            "balance": "74.44",
            "currency": "GBP",
            "status": "ACTIVE",
            "identifiers": [{
                "type": "SCAN",
                "accountNumber": "00001531",
                "sortCode": "000000"
            }],
            "customerId": "C02013ZU",
            "externalReference": "GOJI-0017111"
        }, {
            "id": "A02017NU",
            "name": "1010 SOFTWARE LTD",
            "balance": "46.91",
            "currency": "GBP",
            "status": "ACTIVE",
            "identifiers": [{
                "type": "SCAN",
                "accountNumber": "00001232",
                "sortCode": "000000"
            }],
            "customerId": "C0200098",
            "externalReference": "Account 1"
        }];
        let expectedResult = false;

        //act
        let result = component.isEmptyResultSet(testData);
        fixture.detectChanges();

        //assert
        expect(result).toBe(expectedResult);

    })


});
