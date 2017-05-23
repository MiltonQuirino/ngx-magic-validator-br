import { NgxMagicValidatorBrPage } from './app.po';

describe('ngx-magic-validator-br App', () => {
  let page: NgxMagicValidatorBrPage;

  beforeEach(() => {
    page = new NgxMagicValidatorBrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
