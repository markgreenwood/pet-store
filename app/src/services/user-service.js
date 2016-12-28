userService.$inject = [ 'tokenService', '$window' ];

export default function userService(tokenService, $window) { // eslint-disable-line no-unused-vars
  return {
    isAuthenticated() {
      return !!tokenService.get();
    }
  };
}