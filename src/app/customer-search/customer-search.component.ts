import { Component,  OnInit  } from '@angular/core';
import{CustomerSearchInputComponent} from "./customer-search-input/customer-search-input.component"

import {CustomerSearchService} from './../core/services/customer-search.service'

@Component({
    selector: 'app-customer-search',
    templateUrl: './customer-search.component.html',
    styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {


    searchString:string;
    searchResults:Array<any>;

    searchInProgress:Boolean;
    resultSetEmpty:Boolean;


    constructor(private customerSearchService:CustomerSearchService) {
    }

    ngOnInit() {
        this.setSearchStatus(false);
        this.isEmptyResultSet(this.searchResults);
    }

    onSearch(event) {
        this.clearResults();
        this.setSearchResults(event);

    }

    setSearchResults(event) {

        this.setSearchStatus(true);

        this.customerSearchService.getAllCustomers().subscribe((data)=> {

            let rawResults = data['content'];

            if (event.searchString) {
                this.searchResults = this.filterResults(rawResults, event.searchString);
            }
            else {
                this.searchResults = rawResults;
            }

            this.isEmptyResultSet(this.searchResults);
            this.setSearchStatus(false);
        });
    }


    filterResults(results:Array<any>, searchString:string) {

        let filteredResults;
        let lowerCaseFilter = searchString.toLowerCase();

        filteredResults = results.filter(function (result) {

            return result.id.toLowerCase().indexOf(lowerCaseFilter) > -1 || result.name.toLowerCase().indexOf(lowerCaseFilter) > -1

        })
        return filteredResults;
    }

    clearResults():void {
        this.searchResults = [];
        this.isEmptyResultSet(this.searchResults);
    }

    setSearchStatus(status:Boolean) {
        this.searchInProgress = status;
    }

    isEmptyResultSet(resultSet:Array<any>) {
        !resultSet || resultSet.length === 0 ? this.resultSetEmpty = true : this.resultSetEmpty = false;
    }

}