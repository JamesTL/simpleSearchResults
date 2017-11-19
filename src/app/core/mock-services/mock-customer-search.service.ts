import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ObjectSchemaTreeNode} from "../../../../node_modules/@ngtools/json-schema/src/schema-tree";


export class MockCustomerSearchService {

    user:Object = {
        "content": [{
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
        }]
    };

    constructor() {
    }

    getAllCustomers():Observable<Array<any>> {

        return Observable.of(this.user);
    }

}

