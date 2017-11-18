import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppMainHeaderComponent } from './app-main-header/app-main-header.component';
import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { AppMainFooterComponent } from './app-main-footer/app-main-footer.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerSearchInputComponent } from './customer-search/customer-search-input/customer-search-input.component';
import { CustomerSearchResultsComponent } from './customer-search/customer-search-results/customer-search-results.component';

import { CustomerSearchService } from './core/services/customer-search.service';


@NgModule({
  declarations: [
    AppComponent,
    AppMainHeaderComponent,
    AppMainNavComponent,
    AppMainFooterComponent,
    CustomerSearchComponent,
    CustomerSearchInputComponent,
    CustomerSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CustomerSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
