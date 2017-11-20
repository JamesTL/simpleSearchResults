import { FeTestModulrFinancePage } from './app.po';


describe('fe-test-modulr-finance App', () => {
    let page:FeTestModulrFinancePage;

    beforeEach(() => {
        page = new FeTestModulrFinancePage();
    });


    it('should list 3  navigation links', ()=> {
        page.navigateTo();
        let expectedResult = page.getNavBar().count();

        expect(expectedResult).toBe(3);

    });

    it('should display a 5 table headers', ()=> {
        page.navigateTo();
        let expectedResult = page.getSearchResultsHeaders().count();

        expect(expectedResult).toBe(5);

    });

});
