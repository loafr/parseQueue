var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': 'QiSZlWjZ2MkGNXZwcxfY6VBoPHnnGbWoqYb1oE2e', 'X-Parse-REST-API-Key': 'jeu7irAQKwJEYC5kStyeUnAaP9XCeEOD5f8EnGYh'}
          return config;
        }
      };
    });