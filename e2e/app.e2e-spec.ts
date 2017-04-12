import { PracticeDDDPage } from './app.po';

describe('practice-ddd App', () => {
  let page: PracticeDDDPage;

  beforeEach(() => {
    page = new PracticeDDDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
