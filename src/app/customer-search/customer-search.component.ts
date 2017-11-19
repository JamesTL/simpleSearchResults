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
        this.resultSetEmpty = this.isEmptyResultSet(this.searchResults);
    }

    onSearch(event):void {
        this.clearResults();
        this.setSearchResults(event);
    }

    setSearchResults(event):void {

        this.setSearchStatus(true);

        this.customerSearchService.getAllCustomers().subscribe((data)=> {

            let rawResults = data['content'];

            if (event.searchString) {
                this.searchResults = this.filterResults(rawResults, event.searchString);
            }
            else {
                this.searchResults = rawResults;
            }

            this.resultSetEmpty = this.isEmptyResultSet(this.searchResults);
            this.setSearchStatus(false);
        });
    }


    filterResults(results:Array<any>, searchString:string):Array<any> {

        let filteredResults;
        let lowerCaseFilter = searchString.toLowerCase();

        filteredResults = results.filter(function (result) {

            return result.id.toLowerCase().indexOf(lowerCaseFilter) > -1 || result.name.toLowerCase().indexOf(lowerCaseFilter) > -1

        })
        return filteredResults;
    }

    clearResults():void {
        this.searchResults = [];
        this.resultSetEmpty = this.isEmptyResultSet(this.searchResults);
    }

    setSearchStatus(status:Boolean):void {
        this.searchInProgress = status;
    }

    isEmptyResultSet(resultSet:Array<any>) {
        return !resultSet || resultSet.length === 0 ? true : false;
    }

}