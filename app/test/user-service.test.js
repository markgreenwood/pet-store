describe ('userService', () => {

  let userService = null; // eslint-disable-line no-unused-vars

  const TOKEN_NAME = 'petStoreToken';

  beforeEach(angular.mock.module('services'));

  beforeEach(angular.mock.inject(function(_userService_) {
    userService = _userService_;
  }));

  it ('isAuthenticated if we have a token', () => {
    localStorage.setItem(TOKEN_NAME, '1');
    expect(userService.isAuthenticated()).to.be.ok;
  });

  it ('not isAuthenticated if we don\'t have a token', () => {
    localStorage.removeItem(TOKEN_NAME);
    expect(userService.isAuthenticated()).to.not.be.ok;
  });

  it ('logs user out, i.e. removes token', () => {
    localStorage.setItem(TOKEN_NAME, '1');
    expect(userService.isAuthenticated()).to.be.ok;
    userService.logout();
    expect(userService.isAuthenticated()).to.not.be.ok;
  });

  it ('sets a valid token when user provides valid credentials', () => {
    localStorage.removeItem(TOKEN_NAME);
    const credentials = { username: 'testuser', password: 'testpassword' };
    userService.signin(credentials);
    expect(userService.isAuthenticated()).to.be.ok;
  });

  it ('does not set a valid token when user provides invalid credentials', () => {
    localStorage.removeItem(TOKEN_NAME);
    const credentials = { username: 'baduser', password: 'badpassword' };
    userService.signin(credentials);
    expect(userService.isAuthenticated()).to.not.be.ok;
  });

});