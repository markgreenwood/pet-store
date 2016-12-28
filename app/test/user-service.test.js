describe ('userService', () => {

  let userService = null; // eslint-disable-line no-unused-vars

  beforeEach(angular.mock.module('services'));

  beforeEach(angular.mock.inject(function(_userService_) {
    userService = _userService_;
  }));

  it.skip ('authenticates the user', (done) => {
    expect(false).to.be.ok;
    done();
  });

});