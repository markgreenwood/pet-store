describe ('Pet store', () => {

  it ('has title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('AllKindza Pets');
  });

  describe ('default state', () => {

    it ('goes to /stores/all url', () => {
      expect(browser.getLocationAbsUrl()).toBe('/stores/all');
    });

  });

});