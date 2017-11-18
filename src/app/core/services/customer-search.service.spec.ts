import { TestBed, async, inject } from '@angular/core/testing';
import {
    BaseRequestOptions,
    HttpModule,
    Http,
    Response,
    ResponseOptions
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import { CustomerSearchService  } from './customer-search.service';

describe('CustomerSearchService ', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                CustomerSearchService ,
                {
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend,
                BaseRequestOptions
            ]
        });
    });

    it('should create the service', inject([CustomerSearchService ], (service:CustomerSearchService ) => {
        expect(service).toBeTruthy();
    }));

    describe('getAllAccounts()', ()=> {

        it('should return array of accounts', inject([CustomerSearchService , MockBackend], (customerSearchService , mockBackend)=> {

            //arrange

            const mockResponse = {
                'content': [{
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
                }]
            };

            const expectedResult = {
                'content': [{
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
                }]
            };


            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            let accounts = [];

            //act
            customerSearchService.getAllCustomers().subscribe(data => {
                accounts = data;
            });

            //assert

            expect(expectedResult).toEqual(mockResponse);

        }))
    })
});
