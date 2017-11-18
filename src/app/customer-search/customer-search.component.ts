import { Component,  OnInit  } from '@angular/core';

import {CustomerSearchService} from './../core/services/customer-search.service'

@Component({
    selector: 'app-customer-search',
    templateUrl: './customer-search.component.html',
    styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {


    searchString:string;
    searchResults:Array<any>;

    constructor(private customerSearchService:CustomerSearchService) {
    }

    ngOnInit() {

       // this.getCustomers();
    }

    getCustomers():void {

        this.customerSearchService.getAllCustomers().subscribe((data)=> {
            this.searchResults = data['content'];
        });
    }

    /*
     getAccounts():void {
     this.accountsService.getAllAccounts().subscribe((data)=> {
     this.allAccounts = data['content'];
     this.accountsToDisplay = data['content'];
     },
     (err) => {
     console.log(err);
     }
     )
     }
     * */
}
