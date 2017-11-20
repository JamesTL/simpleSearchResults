import { browser, element, by } from 'protractor';

export class FeTestModulrFinancePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1 img'));
  }
}
