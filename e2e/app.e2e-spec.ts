import { FeTestModulrFinancePage } from './app.po';

describe('fe-test-modulr-finance App', () => {
  let page: FeTestModulrFinancePage;

  beforeEach(() => {
    page = new FeTestModulrFinancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});