import { NgBetaDemoPage } from './app.po';

describe('ng-beta-demo App', function() {
  let page: NgBetaDemoPage;

  beforeEach(() => {
    page = new NgBetaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
