import { BasicAngularCmsPage } from './app.po';

describe('basic-angular-cms App', () => {
  let page: BasicAngularCmsPage;

  beforeEach(() => {
    page = new BasicAngularCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
