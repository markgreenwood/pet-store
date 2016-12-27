class StoresAllPage {
  constructor() {
    const nav = element.all(by.css('nav a'));
    this.stores = nav.get(1);
    this.uiView = element(by.css('main ui-view'));
  }

  get() {
    return browser.get('/');
  }

  get title() {
    return browser.getTitle();
  }

  get url() {
    return browser.getLocationAbsUrl();
  }

  get stateComponent() {
    return element(by.css());
  }
}

describe ('Pet store', () => {

  const storesPage = new StoresAllPage();

  it ('has title', () => {
    storesPage.get();
    expect(storesPage.title).toEqual('AllKindza Pets');
  });

  describe ('default state', () => {

    it ('goes to /stores/all url', () => {
      expect(storesPage.url).toBe('/stores/all');
    });

  });

  describe ('stores.all state', () => {

    it ('uses the storesAll component', () => {
      expect(element(by.css('main ui-view')).all(by.css('*')).first().getTagName()).toEqual('stores');
    });

    it ('displays header with company name', () => {
      // TODO: check for header
      const header = element(by.css('header h1')).getText();
      expect(header).toEqual('AllKindza Pets');
    });

    it ('displays a list of stores', () => {
      const rows = element(by.css('stores-all tr')).all;
      expect(rows.length).toBeGreaterThan(1);
    });

    // it ('has a link going to stores.add', () => {
    //   // TODO: click add new store link and make sure it goes to stores.add
    // });

    // it ('cancel button returns to stores.all', () => {
    //   // TODO: click cancel and check for stores.all state
    // });

    // it ('clicking on a store listing goes to store.pets for that store', () => {
    //   // TODO: click on a store and check for state store.pets (component, url, etc.)
    // });

  });

});