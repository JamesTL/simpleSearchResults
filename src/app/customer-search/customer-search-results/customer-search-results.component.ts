import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-search-results',
  templateUrl: './customer-search-results.component.html',
  styleUrls: ['./customer-search-results.component.scss']
})
export class CustomerSearchResultsComponent implements OnInit {


  @Input() searchResults:Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
