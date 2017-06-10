import { NgpractisePage } from './app.po';

describe('ngpractise App', () => {
  let page: NgpractisePage;

  beforeEach(() => {
    page = new NgpractisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
