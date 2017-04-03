import { CyDirectivePage } from './app.po';

describe('cy-directive App', () => {
  let page: CyDirectivePage;

  beforeEach(() => {
    page = new CyDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
