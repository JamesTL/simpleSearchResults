import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerSearchService {

    apiString:String = 'assets/data/results.json';

    constructor(private http:Http) {
    }

    getAllCustomers():Observable<Array<any>> {
        let apiUrl = `${this.apiString}`;
        return this.http.get(apiUrl).map((res)=>res.json());

    }
}
