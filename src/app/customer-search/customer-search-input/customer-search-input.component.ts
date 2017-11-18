import { Component,Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer-search-input',
    templateUrl: './customer-search-input.component.html',
    styleUrls: ['./customer-search-input.component.scss']
})
export class CustomerSearchInputComponent implements OnInit {

    @Output() doCustomerSearch = new EventEmitter();

    filterString: string;

    constructor() {
    }

    ngOnInit() {
    }

    customerSearch($event):void {
                this.doCustomerSearch.emit({event:$event,searchString:this.filterString})

    }

}
