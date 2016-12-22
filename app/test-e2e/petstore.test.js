describe ('Pet store', () => {

  it ('has title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Code Fellows Pet Store');
  });

});