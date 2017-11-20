import { browser, element, by } from 'protractor';

export class FeTestModulrFinancePage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('#test')).getText();
    }

    getNavBar() {

        return element.all(by.css('nav ul li'));
    }

    getSearchResultsHeaders() {

        return element.all(by.css('table#customerSearchResults tr th'));
    }

}
