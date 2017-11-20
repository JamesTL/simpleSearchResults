import { Component,Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-customer-search-input',
    templateUrl: './customer-search-input.component.html',
    styleUrls: ['./customer-search-input.component.scss']
})
export class CustomerSearchInputComponent {

    @Output() doCustomerSearch = new EventEmitter();

    filterString:string;

    constructor() {
    }
    customerSearch($event):void {
        this.doCustomerSearch.emit({event: $event, searchString: this.filterString})
    }
}
